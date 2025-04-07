<script setup>
    import { ref } from 'vue';

    // const baseLink = '/psychic-octo-waddle';
    const baseLink = '';

    const oldCells = ref([
        {
            name: 'Space Invader Game', source: '',
            description: 'A simple space invader game I made in 2020.',
            tools: ['Scala','ScalaFX','Git','VSCode'],
            link: 'https://github.com/TrinityUniv-CS1321-Spring2017/spacegame20-alee8-TU',
        },
        {
            name: 'Tutoring Scheduler', source: baseLink + '/images/schedule.jpg',
            description: 'A webapp that was made to help professors and TAs schedule tutoring sessions. Made in 2021',
            tools: ['React', 'SQL'],
            link: 'https://github.com/ChrisGKennedy/tutoringScheduler',
        },
        {
            name: 'Minecraft Map Database', source: '',
            description: 'A webapp for browsing and sharing Minecraft CTM maps. Made in 2022.',
            tools: ['ReactJS','PostgreSQL'],
            link: 'https://github.com/hydrogen602Trinity/Cartographers',
        },
        {
            name: 'Connect 4 AI', source: baseLink + '/images/connect4.jpg',
            description: 'Created AI for Connect 4 that used future gamestates to make optimal moves. Included difficulty setting. Made in 2020',
            tools: ['Haskell','Git'],
            link: 'https://github.com/TU-CSCI2322-FL20/game-solver-doubting_thomases',
        },
    ]);

    const newCells = ref([
        {
            name: 'Personal Site', source: baseLink + '/images/inception.png',
            description: 'You\'re here! I published this site in April 2025.',
            tools: ['Vue 3','Vite', 'Bootstrap'],
            link: 'https://github.com/dazephster/psychic-octo-waddle',
        },
        {
            name: 'Task/Habit Progress Webapp', source: baseLink + '/images/list.jpg',
            description: 'I was inspired to create my own progress tracker app after not being able to find what I needed elsewhere. ' +
            'This app is still in-progress and I started in April 2025.',
            tools: ['Angular',''],
            link: '',
        },
        {
            name: 'SuperTiebreaker', source: baseLink + '/images/stb_placeholder.jpg',
            description: 'A simple tennis game I\'m working on in my free time. I started in February 2025.',
            tools: ['Godot',''],
            link: '',
        },
        {
            name: 'Frixion', source: '',
            description: 'A racing game inspired by Sonic Riders, F-Zero, and other fast-paced racers.',
            tools: ['',''],
            link: '',
        },
    ]);
</script>

<template>
    <div class="container">
        <div class="row">
            <div 
                v-for="(cell, index) in newCells" 
                :key="index"
                class="col-12 col-md-6 mb-3"
            >
                <div class="cell">
                    <div class="top-row d-flex justify-content-left align-items-center row">
                        <div class="col-8">
                            <div class="name">
                                <span>{{ cell.name }}</span>
                            </div>
                        </div>
                        <div class="col-4 picture-col">
                            <img v-if="cell.source.length > 2" class="picture" :src="cell.source" alt="cell image" />
                        </div>
                    </div>
                    <div class="spacer"></div>
                    <div class="bottom-row row">
                        <div class="col-6">
                            <div class="description">{{ cell.description }}</div>
                        </div>
                        <div class="col-6">
                            <div class="tools">
                                <div>Tools Used:</div>
                                <li v-for="(tool, index) in cell.tools" :key="index">{{ tool }}</li>
                            </div>
                            <div class="link">
                                <a v-if="cell.link.length > 2" :href="cell.link" target="_blank">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="header">
            Old Projects
        </div>
        <div class="row">
            <!-- Olds -->
            <div 
                v-for="(cell, index) in oldCells" 
                :key="index"
                class="col-12 col-md-6 mb-3"
            >
                <div class="cell">
                    <div class="top-row d-flex justify-content-left align-items-center row">
                        <div class="col-8">
                            <div class="name">
                                <span>{{ cell.name }}</span>
                            </div>
                        </div>
                        <div class="col-4 picture-col">
                            <img v-if="cell.source.length > 2" class="picture" :src="cell.source" alt="cell image" />
                        </div>
                    </div>
                    <div class="spacer"></div>
                    <div class="bottom-row row">
                        <div class="col-6">
                            <div class="description">{{ cell.description }}</div>
                        </div>
                        <div class="col-6">
                            <div class="tools">
                                <div>Tools Used:</div>
                                <li v-for="(tool, index) in cell.tools" :key="index">{{ tool }}</li>
                            </div>
                            <div class="link">
                                <a v-if="cell.link.length > 2" :href="cell.link" target="_blank">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        padding-top: 20px;
    }

    .header {
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 20px;
        text-decoration: underline;
    }

    .cell {
        height: 100%;
        padding: 10px;
        border: 1px solid var(--color-secondary);
        border-radius: 10px;
        box-shadow: 0px 0px 10px 2px var(--color-secondary);
    }

    .top-row {
        height: 100px;
    }

    .name {
        font-size: 16px;
    }

    .picture-col {
        height: 100%;

        .picture {
            max-width: 100%;
            padding-right: 6px;
            height: 90%;
        }
    }

    .spacer {
        margin-top: 6px;
        margin-bottom: 6px;
        border-bottom: 2px solid var(--color-secondary);
    }

    .bottom-row {
        font-size: 12px;
    }
</style>