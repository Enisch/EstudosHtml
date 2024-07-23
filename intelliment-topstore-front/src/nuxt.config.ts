// https://nuxt.com/docs/api/configuration/nuxt-config
/*export default defineNuxtConfig({
    devtools: { enabled: true },
    srcDir: "src/",
    // target: 'static',
    modules: ["@primevue/nuxt-module", "nuxt-auth-utils", "@pinia/nuxt"],
    plugins: ["@/plugins/vuelidate.ts", "@/plugins/api.ts"],
    pinia: {
      autoImports: ["defineStore", "acceptHMRUpdate"],
    },
    primevue: {
      options: {
        ripple: true,
        locale: {
          fileSizeTypes: [
            "Bytes",
            "KB",
            "MB",
            "GB",
            "TB",
            "PB",
            "EB",
            "ZB",
            "YB",
          ],
          dayNames: [
            "domingo",
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
          ],
          dayNamesShort: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
          dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
          monthNames: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
          ],
          monthNamesShort: [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez",
          ],
          today: "Hoje",
          clear: "Limpar",
          dateFormat: "dd/mm/yy",
          aria: {
            star: "1 estrela",
            stars: "{star} estrelas",
            pageLabel: "",
          },
        },
      },
      components: {
        include: "*",
      },
      importTheme: { from: "@/themes/defaultTheme.ts" },
    },
    app: {
      pageTransition: { name: "page", mode: "out-in" },
      head: {
        charset: "utf-8",
        viewport:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      },
    },
    css: ["./assets/scss/app.scss"],
    nitro: {
      output: {
        dir: "dist",
        serverDir: "dist/server",
        publicDir: "dist/client",
      },
    },
    imports: {
      dirs: ["./stores"],
    },
  });
  */