<script setup>
    import { useTemplateRef, ref, onMounted, watch } from 'vue';

    const expandCell = (event, newCell) => {
        expanding.value = !expanding.value;
        curImg.value = newCell.source;
        curName.value = newCell.name;
        curDesc.value = newCell.description;
        curFuns.value = newCell.funs;

        const cell = event.currentTarget;
        const rect = cell.getBoundingClientRect();
        const containerRect = event.currentTarget.closest('.outer').getBoundingClientRect();

        expandBoxStyle.value = {
            position: 'absolute',
            top: `${rect.top - containerRect.top}px`,
            left: `${rect.left - containerRect.left}px`,
            width: `${rect.width}px`,
            height: `${rect.height}px`,
        };

        expandCellStyle.value = {
            width: `${rect.width}px`,
            height: `${rect.height}px`,
            backgroundColor: `${cell.style.backgroundColor}`,
            border: `none`,
        };

        descTimeout();
        funsTimeout();
    };

    const showDesc = ref(false);
    const descTimeout = () => {
        setTimeout(() => {
            showDesc.value = true;
        }, 1000);
    }

    const showFuns = ref(false);
    const funsTimeout = () => {
        setTimeout(() => {
            showFuns.value = true;
        }, 2000);
    }

    const closeCell = () => {
        expanding.value = false;
        showDesc.value = false;
        showFuns.value = false;
    };

    const expanding = ref(false);
    const expandBoxStyle = ref({});
    const expandCellStyle = ref({});

    const curImg = ref('');
    const curName = ref('');
    const curDesc = ref('');
    const curFuns = ref([]);

    // const baseLink = '/psychic-octo-waddle';
    const baseLink = '';

    const cells = ref([
        {name: 'Tennis & Other Sports', source: baseLink + '/images/tennis.jpg', color: 'blue', nameColor: 'white',
            description: 'I played tennis competitively from when I was 12 through college. '
                + 'I still enjoy playing recreationally, teaching other players, and trying ' 
                + 'out similar sports like badminton and pickleball.',
            funs: ['My favorite shots are the inside-out forehand and kick serve',
                'I was a runner-up in the Texas Grand Slam twice for singles and once in doubles',
                'My favorite player to watch was Juan Martin del Potro'],
        },
        {name: 'Esports & Video Games', source: baseLink + '/images/tamusa_event.jpg', color: 'black', nameColor: 'white',
            description: 'I was introduced to video games at a young age through playing FIFA matches with my dad. '
                + 'I grew up with Nintendo consoles and got into PC games while in college. '
                + 'After my tennis injury until college I made almost all of my friends through competing in Super Smash Bros tournaments.',
            funs: ['My recently played Steam games are ',
                'My most replayed games are probably Mario and Luigi: Superstar Saga and Fire Emblem 7',
                'I\'ve competed in many platform fighters, and have won a few local tournaments including a San Antonio arcadian.',
                'https://www.start.gg/tournament/otaku-zone-season-3-arcadian/events',
            ],
        },
        {name: 'Powerlifting', source: baseLink + '/images/gym.webp', color: 'red', nameColor: 'white',
            description: 'After my knee injury, I started becoming more invested in weightlifting. '
                + 'For a while I focused on powerlifting, but as my knee slowly continues to improve '
                + 'I\'ve been able to incorporate more athletic and dynamic movements into my routine.',
            funs: ['My estimated Wilks score is ~290','I am a based leg day enjoyer',
            'I\'d be goated fr fr if I would diet properly',
            ],
        },
        {name: 'Hiking', source: baseLink + '/images/hiking.jpg', color: 'yellow', nameColor: 'black',
            description: 'Hiking is a more recent hobby that I picked up while traveling to Alaska. '
                + 'Now whenever I travel I make sure to set aside at least a day to hike and explore. ',
            funs: ['I\'ve hiked in Alaska, California, and Texas so far', 'I\'ve been within about 50 feet of a moose',
            ]
        },
        {name: 'Reading', source: baseLink + '/images/dark_tower.webp', color: 'green', nameColor: 'white',
            description: 'I used to read a lot when I was younger, but for a few reasons (mostly school making it feel like a chore and video games) '
                + 'I stopped reading books outside of school for about a decade. I\'ve recently returned to reading '
                + 'and am currently working my way through the Dark Tower series by Stephen King.',
            funs: ['My favorite series as a kid was Guardians of Ga\'Hoole',
                'After finishing the Dark Tower I plan on continuing the Bloodsworn Saga by John Gwynne',
                'I also like listening to more educational audiobooks like "Stolen Focus" and "Breath"',
                'Check out my Goodreads: https://www.goodreads.com/user/show/179546083-austin',
            ]
        },
    ]);

    onMounted(async () => {
        try {
            const N = await (await fetch("/.netlify/functions/fetchSteamData")).json();
            console.log("Function response:", N);

            const res = await fetch('/.netlify/functions/fetchSteamData');
            const json = await res.json();
            const gamesArr = ref([]);
            json.response.games.forEach(game => {
                gamesArr.value.push(game.name);
            });
            console.log(gamesArr.value);

            
            cells.value[1].funs[0] += gamesArr.value.join(', ') + " (via SteamAPI)";
        } catch (err) {
            console.error('Failed to fetch Steam data:', err);
        }
    });
</script>

<template>
    <div id="mobile-cover" class="mobile-cover outer">
        <div class="mobile-text">
            <span>Hobbies Page is not mobile friendly (yet).<br>Please expand the webpage to see the cells and animations</span>
        </div>
    </div>
    <div id="container" ref="container" class="container outer">
        <div class="header">Click on a cell to see more!</div>
        <div ref="expand-box" v-if="expanding" :style="expandBoxStyle" class="expand-box"
        @click="closeCell()">
            <div class="row">
                <div class="col-12 col-sm-4">
                    <div class="cell"
                    :style="expandCellStyle">
                        <div class="picture-box">
                            <img class="picture" :src="curImg" alt="cell image" />
                        </div>
                        <div class="name-box">
                            <div class="name">{{ curName }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-8 d-flex align-items-center justify-content-center">

                    <div v-if="showDesc" class="description">
                        {{ curDesc }}
                    </div>
                </div>
            </div>
            <div class="row expand-box-bottom">
                <div class="col-12">
                    <div v-if="showFuns" class="fun-facts">
                        <ul>
                            <li class="fun-fact" v-for="(fun, index) in curFuns"
                                :key="index"
                                :style="{animationDelay: `${index * 0.5}s`}">
                                {{ "• " + fun }}
                            </li>
                        </ul>
                        <div class="close-text fun-fact"
                            :style="{animationDelay: `${curFuns.length * 0.5}s`}">
                            * Click anywhere in the cell to close
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="cell-container" class="row justify-content-center">
            <div 
                v-for="(cell, index) in cells" 
                :key="index" 
                class="col-12 col-md-4 mb-3"
            >
                <div class="cell"
                @click="expandCell($event, cell)">
                    <div class="picture-box">
                        <img class="picture" :src="cell.source" alt="cell image" />
                    </div>
                    <div class="name-box">
                        <div class="name">{{ cell.name }}</div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>

<style scoped>
.mobile-cover {
    z-index: 1000;
    background-color: grey;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mobile-text {
    text-align: center;
    font-size: 20px;
    color: black;
}

.outer {
    margin-top: 20px;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.header {
    font-size: 18px;
    text-align: center;
    margin-bottom: 6px;
    font-weight: 500;
}

.row {
    position: relative;
}

.cell {
    /* max-width: 100%; */
    height: 200px;
    padding: 8px;
    border: 1px solid black;
    border-radius: 8px;
    cursor: pointer;
    background-color: var(--color-primary);

    .picture-box {
        width: 100%;
        height: 80%;

        .picture {
            max-width: 100%;
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 8px;
        }
    }

    .name-box {
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;

        .name {
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            color: white;
        }
    }
}

.expand-box {
    cursor: pointer;
    background-color: var(--color-primary);
    border: 2px solid black;
    border-radius: 8px;
    animation: expand 1s forwards ease-in-out;
    z-index: 100;
    display: flex;
    flex-direction: column;

    .description {
        text-align: center;
        animation: fade-up 1s forwards ease-in-out;
        color: white;
        font-size: 16px;
    }

    .expand-box-bottom {
        flex: 1;
    }

    .fun-facts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    .fun-fact {
        opacity: 0;
        margin-top: 12px;
        margin-bottom: 12px;
        padding-left: 20px;
        color: white;
        animation: wipe-in-right 1s forwards ease-in;
    }

    .close-text {
        opacity: 0;
        animation: wipe-in-right 1s forwards ease-in;
    }
}

@keyframes expand {
    from {
    }
    to {
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }
}

@keyframes fade-up {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0%);
    }
}

@keyframes wipe-in-right {
    from {
        opacity: 1;
        clip-path: inset(0 100% 0 0);
    }
    to {
        opacity: 1;
        clip-path: inset(0 0 0 0);
    }
  }
  
  [transition-style="in:wipe:right"] {
    animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-in-right both;
  }

  @media only screen and (min-width: 770px) {
        #mobile-cover {
            display: none;
        }
    }

    @media only screen and (max-width: 769px) {
        #cell-container {
            display: none;
        }
    }
</style>