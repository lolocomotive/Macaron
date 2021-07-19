<template>
    <div>
        <h1>{{ t('home.welcome') }}</h1>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
export default {
    name: '',
    setup() {
        const { t } = useI18n({
            inheritLocale: true,
            useScope: 'local',
        });
        return { t };
    },
};
</script>

<style scoped>
h1 {
    background-image: url(https://static.750g.com/images/1200-630/2bb28ae83807e3f46e861587586c6aee/adobestock-182827481.jpeg);
    padding-top: 150px;
    padding-bottom: 150px;
    text-align: center;
    font-weight: 300;
    font-size: 4em;
}
</style>
