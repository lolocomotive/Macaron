<template>
    <div id="navbar">
        <MenuBtn />
        <h1>{{ getTitle }}</h1>
        <PresentBtn
            :style="
                isProjectPage
                    ? ''
                    : 'opacity:0; pointer-events:none;user-select:none;'
            "
        />
    </div>
</template>
<script>
import MenuBtn from './MenuBtn';
import PresentBtn from './PresentBtn';
import { useI18n } from 'vue-i18n';

export default {
    name: 'Nav',
    components: {
        MenuBtn,
        PresentBtn,
    },
    setup() {
        const { t } = useI18n({
            inheritLocale: true,
            useScope: 'local',
        });
        return { t };
    },
    computed: {
        isProjectPage() {
            return this.$route.name === 'Home';
        },
        getTitle() {
            let title = '';
            switch (this.$route.name) {
                case 'Login':
                    title = this.t('login');
                    break;
                case 'Register':
                    title = this.t('register');
                    break;
            }
            return title;
        },
    },
};
</script>
<style scoped>
#navbar {
    background-color: var(--purple);
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
}
h1 {
    margin: 0;
    color: white;
    font-weight: 300;
}
</style>
