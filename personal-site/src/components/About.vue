<script>
    import { ref, computed } from 'vue';

    export default {
        name: 'About',
        setup() {
            const curTime = ref(new Date());
            const timeMessage = computed(() => {
                if(curTime.value.getHours() < 12){
                    return 'Morning';
                } else if(curTime.value.getHours() < 18){
                    return 'Afternoon';
                } else {
                    return 'Evening';
                }
            });

            let ageInYrs = curTime.value.getFullYear() - 2000;
            const monthDif = curTime.value.getMonth() - 11;
            if(monthDif < 0 || (monthDif === 0 && curTime.value.getDate() < 13)){
                ageInYrs--;
            }

            return {
                timeMessage,
                ageInYrs,
            }
        },
    }

</script>

<template>
    <div class="container padding">
        <div class="row">
            <span class="header">Good {{ timeMessage }}!</span>
            <span>
                My name is Austin Lee! I'm a {{ ageInYrs }} year old software developer
                from Frisco, Texas. All my life I've been a curious learner and a passionate competitor.
                I enjoy building cool things, collaborating with others, and leading myself and my team to victory.
            </span>
            <div v-intersect class="image-box d-flex justify-content-center">
                <img class="image" src="/images/car.jpg" alt="Me w Loki" />
            </div>
            <span>
                I was born in Houston and have lived in Texas all my life. I attended Laurel Springs online school from 6th to 11th grade while pursuing competitive junior tennis.
                After I suffered a chronic knee injury I attended Frisco High School. It was at this time
                that I began my journey into software development.
                I had always been curious about computers and technology due in part to my love of video games,
                and as soon as I began learning to code I was hooked.
            </span>
            <div v-intersect class="image-box d-flex justify-content-center">
                <img class="image" src="/images/trinity_tennis.jpg" alt="Trinity Tennis Team Picture" />
            </div>
            <span>
                After high school I attended Trinity University in San Antonio, where I graduated with honors,
                majoring in Computer Science and minoring in Economics. During my time at Trinity I continued
                exploring my passions by becoming the president of the gaming club, competing on the men's tennis
                team and esports teams, and tutoring fellow students as an ACM tutor.
            </span>
            <div v-intersect class="image-box d-flex justify-content-center">
                <img class="image" src="/images/couch2.jpg" alt="Me on the CSI lounge couch" />
            </div>
            <span>
                Now, I am channeling my competitive and creative spirit into my work as a software developer as
                well as into new hobbies. I am excited to continue to expand my knowledge as a developer and (hopefully)
                master my craft in this deep and dynamic field.
            </span>
        </div>
    </div>
</template>

<style scoped>
    .padding {
        padding-top: 50px;
    }

    .header {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
    }

    .temp {
        height: 500px;
    }

    .image-box {
        margin-top: 20px;
        margin-bottom: 20px;
        opacity: 0;
        width: 100%;
        height: 200px;
    }

    .image-box.animate {
        animation: image-wipe-in-left 2s forwards ease-in-out;
    }

    .image {
        /* animation: name duration timing-function delay iteration-count direction fill-mode; */
        height: 100%;
        box-shadow: 0px 0px 10px 4px var(--color-secondary);
    }

    @keyframes image-wipe-in-left {
        from {
            opacity: 0;
            transform: translateX(20%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

@keyframes wipe-in-left {
    from {
      clip-path: inset(0 0 0 100%);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }
  
  [transition-style="in:wipe:left"] {
    animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-in-left both;
  }

</style>