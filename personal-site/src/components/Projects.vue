<script setup>
    import { ref, onMounted } from 'vue';

    // export default {
    //     name: 'Projects',
    // }
    //Cell has a name, picture (can be default), description, tools used, and link

    const oldCells = ref([
        {
            name: 'Space Invader Game', source: '',
            description: 'A simple space invader game I made in 2020.',
            tools: ['Scala','ScalaFX','Git','VSCode'],
            link: 'https://github.com/TrinityUniv-CS1321-Spring2017/spacegame20-alee8-TU',
        },
        {
            name: 'Tutoring Scheduler', source: '',
            description: 'A webapp that was made to help professors and TAs schedule tutoring sessions.',
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
            name: 'Connect 4 AI', source: '',
            description: 'Created AI for Connect 4 that used future gamestates to make optimal moves. Included difficulty setting.',
            tools: ['Haskell','Git'],
            link: 'https://github.com/TU-CSCI2322-FL20/game-solver-doubting_thomases',
        },
    ]);

    const newCells = ref([
        {
            name: 'Personal Site', source: '/images/inception.png',
            description: 'You\'re here! I made this site in April 2025.',
            tools: ['Vue 3','Vite', 'Bootstrap'],
            link: 'https://github.com/dazephster/psychic-octo-waddle',
        },
        {
            name: 'Progress/Meditation Webapp', source: '',
            description: 'I was inspired to create my own progress tracker app after not being able to find what I needed elsewhere. ' +
            'This app is still in-progress and I started in April 2025.',
            tools: ['Angular',''],
            link: '',
        },
        {
            name: 'SuperTiebreaker', source: '/images/stb_placeholder.jpg',
            description: 'A simple tennis game I\'m working on in my free time. I started in April 2025.',
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

    onMounted(() => {
        console.log('Projects mounted');
    });
</script>

<template>
    <div class="container">
        <div>
            Newer Projects
        </div>
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

        <div>
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
                    <div class="top-row row">
                        <div class="col-8">
                            <div class="name">{{ cell.name }}</div>
                        </div>
                        <div class="col-4 picture-col">
                            <img v-if="cell.source.length > 2" class="picture" :src="cell.source" alt="cell image" />
                        </div>
                    </div>
                    <div class="bottom-row row">
                        <div class="col-6">
                            <div class="description">{{ cell.description }}</div>
                        </div>
                        <div class="col-6">
                            <div class="tools">
                                <div v-for="(tool, index) in cell.tools" :key="index">{{ tool }}</div>
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

<style>
    .cell {
        height: 100%;
        padding: 10px;
        border: 1px solid var(--color-secondary);
        border-radius: 10px;
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
            padding-right: 6px;
            height: 90%;
        }
    }

    .spacer {
        margin-top: 6px;
        margin-bottom: 6px;
        border-bottom: 2px solid white;
    }

    .bottom-row {
        font-size: 12px;
    }
</style>