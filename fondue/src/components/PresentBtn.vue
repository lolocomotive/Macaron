<template>
    <div id="present-container">
        <div id="present-text">
            <Icon icon="fas fa-play" />{{ t('navbar.present') }}
        </div>
    </div>
</template>
<script>
import Icon from './Icon';
import { useI18n } from 'vue-i18n';

export default {
    name: 'PresentBtn',
    components: {
        Icon,
    },
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
#present-container {
    color: white;
    font-size: var(--navbar-font-size);
    font-weight: 300;
    margin-bottom: 0;
    padding: 10px;
}
#present-text {
    display: flex;
    align-items: center;
}
.icon {
    font-size: 0.65em;
    margin-right: 5px;
    margin-bottom: -2px;
}
</style>
