<template>
    <v-card>
        <v-list two-line>
            <v-list-tile @click="">
                <v-list-tile-action>
                    <v-icon>system_update_alt</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{oemVersion}}</v-list-tile-title>
                    <v-list-tile-sub-title> {{ $t('hardware') }}, {{ updateTime | moment("from") }}</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="">
                <v-list-tile-action>
                    <v-icon>update</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ applicationVersion }} - {{ $t('status') }}: {{ $t('state.'+ status) }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ $t('application') }}, {{ updateTime | moment("from") }}
                    </v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-card>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: mapGetters({
            status: 'update/status',
            applicationVersion: 'update/applicationVersion',
            oemVersion: 'update/oemVersion',
            updateTime: 'update/statusUpdateTime',
        }),
    }
</script>

<i18n>
    fr:
        hardware: "Id Hardware"
        application: "Version de l'application"
        status: "status"
        state:
            NOT_DEFINED: "Non définie"
            IDLE: "En attente"
            DOWNLOADING_UPDATE: "Télécharge la mise à jour"
            CHECKING_FOR_UPDATES: "Vérifie la mise à jour"
            FINALIZING_UPDATE: "Finalise la mise à jour"
            REPORTING_ERROR: "Erreur"
            UPDATED_NEEDS_REBOOT: "La mise à jour nécessite un redémarrage"
            UPDATE_AVAILABLE: "Mise à jour disponible"
    en:
        hardware: "Hardware Id"
        application: "Application version"
        status: "status"
        state:
            NOT_DEFINED: "Not defined"
            IDLE: "Idle"
            DOWNLOADING_UPDATE: "Downloading update"
            CHECKING_FOR_UPDATES: "Checking for update"
            FINALIZING_UPDATE: "Finalizing update"
            REPORTING_ERROR: "Reporting error"
            UPDATED_NEEDS_REBOOT: "Update needs reboot"
            UPDATE_AVAILABLE: "Update available"
    ja:
        hardware: "ハードウェアID"
        application: "アプリケーションのバージョン"
        status: "分"
        state:
            NOT_DEFINED: "定義されていません"
            IDLE: "アイドル"
            DOWNLOADING_UPDATE: "アップデートのダウンロード"
            CHECKING_FOR_UPDATES: "更新の確認"
            FINALIZING_UPDATE: "アップデートの終了"
            REPORTING_ERROR: "レポートエラー"
            UPDATED_NEEDS_REBOOT: "アップデートは再起動が必要です"
            UPDATE_AVAILABLE: "利用可能な更新"
</i18n>
