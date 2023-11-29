module.exports = {
  docs: [
    "introduction",
    "install",
    {
      type: "category",
      label: "Create Flet app",
      link: {
        type: "doc",
        id: "create/overview",
      },
      items: [
        "create/getting-started",
        //'create/displaying-data',
        "create/getting-user-input",
        "create/page-1",
        "create/page-2",
      ],
    },
    {
      type: "category",
      label: "Run Flet app",
      link: {
        type: "doc",
        id: "run/overview",
      },
      items: [
        "run/page-1",
        "run/page-2",
      ],
    },
    {
      type: "category",
      label: "Publish Flet app",
      link: {
        type: "doc",
        id: "publish/overview",
      },
      items: [
        {
          type: "category",
          label: "Deploying web app",
          link: {
            type: "doc",
            id: "publish/deploying-web-app/overview",
          },
          items: [
            "publish/deploying-web-app/customizing-web-app",
            "publish/deploying-web-app/running-flet-with-fastapi",
            "publish/deploying-web-app/progressive-web-apps",
            {
              type: "category",
              label: "Hosting providers",
              link: {
                type: "doc",
                id: "publish/deploying-web-app/hosting-providers/overview",
              },
              items: [
                "publish/deploying-web-app/hosting-providers/fly-io",
                "publish/deploying-web-app/hosting-providers/replit",
                "publish/deploying-web-app/hosting-providers/self-hosting",
              ],
            },
          ],
        },
        "publish/page-1",
        "publish/page-2",
      ],
    },
    {
      type: "category",
      label: "Controls",
      link: {
        type: "doc",
        id: "controls/overview",
      },
      items: [
        {
          type: "category",
          label: "Layout",
          link: {
            type: "generated-index",
            slug: "controls/layout",
          },
          items: [
            "controls/card",
            "controls/column",
            "controls/container",
            "controls/datatable",
            "controls/dismissible",
            "controls/divider",
            "controls/expansiontile",
            "controls/gridview",
            "controls/listtile",
            "controls/listview",
            "controls/page",
            "controls/responsiverow",
            "controls/row",
            "controls/safearea",
            "controls/stack",
            "controls/tabs",
            "controls/verticaldivider",
            "controls/view",
          ],
        },
        {
          type: "category",
          label: "Navigation",
          link: {
            type: "generated-index",
            slug: "controls/app-structure-navigation",
          },
          items: [
            "controls/appbar",
            "controls/bottomappbar",
            "controls/navigationbar",
            "controls/navigationdrawer",
            "controls/navigationrail",
          ],
        },
        {
          type: "category",
          label: "Information Displays",
          link: {
            type: "generated-index",
            slug: "controls/information-displays",
          },
          items: [
            "controls/badge",
            "controls/canvas",
            "controls/circleavatar",
            "controls/icon",
            "controls/image",
            "controls/markdown",
            "controls/text",
            "controls/progressbar",
            "controls/progressring",
            "controls/webview",
          ],
        },
        {
          type: "category",
          label: "Buttons",
          link: {
            type: "doc",
            id: "controls/buttons",
          },
          items: [
            "controls/elevatedbutton",
            "controls/filledbutton",
            "controls/filledtonalbutton",
            "controls/floatingactionbutton",
            "controls/iconbutton",
            "controls/outlinedbutton",
            "controls/popupmenubutton",
            "controls/segmentedbutton",
            "controls/textbutton",
          ],
        },
        {
          type: "category",
          label: "Input and Selections",
          link: {
            type: "generated-index",
            slug: "controls/input-and-selections",
          },
          items: [
            "controls/checkbox",
            "controls/chip",
            "controls/dropdown",
            "controls/radio",
            "controls/rangeslider",
            "controls/slider",
            "controls/switch",
            "controls/textfield",
          ],
        },
        {
          type: "category",
          label: "Dialogs, Alerts and Panels",
          link: {
            type: "generated-index",
            slug: "controls/dialogs-alerts-panels",
          },
          items: [
            "controls/alertdialog",
            "controls/banner",
            "controls/bottomsheet",
            "controls/datepicker",
            "controls/snackbar",
            "controls/timepicker"
          ],
        },
        {
          type: "category",
          label: "Charts",
          link: {
            type: "generated-index",
            slug: "controls/charts",
          },
          items: [
            "controls/barchart",
            "controls/linechart",
            "controls/matplotlibchart",
            "controls/piechart",
            "controls/plotlychart"
          ],
        },
        {
          type: "category",
          label: "Animations",
          link: {
            type: "generated-index",
            slug: "controls/animations",
          },
          items: ["controls/animatedswitcher"],
        },
        {
          type: "category",
          label: "Utility",
          link: {
            type: "generated-index",
            slug: "controls/utility",
          },
          items: [
            "controls/audio",
            "controls/draggable",
            "controls/dragtarget",
            "controls/filepicker",
            "controls/fletapp",
            "controls/gesturedetector",
            "controls/hapticfeedback",
            "controls/selectionarea",
            "controls/semantics",
            "controls/shadermask",
            "controls/shakedetector",
            "controls/tooltip",
            "controls/transparentpointer",
            "controls/windowdragarea",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Cookbook",
      items: [
        "guides/python/keyboard-shortcuts",
        "guides/python/large-lists",
        "guides/python/drag-and-drop",
        "guides/python/navigation-and-routing",
        "guides/python/file-picker-and-uploads",
        "guides/python/animations",
        "guides/python/authentication",
        "guides/python/client-storage",
        "guides/python/session-storage",
        "guides/python/encrypting-sensitive-data",
        "guides/python/pub-sub",
        "guides/python/user-controls",
        "guides/python/control-refs",
        "guides/python/accessibility",
        "guides/python/async-apps",
        //"guides/python/mobile-support",
        "guides/python/testing-on-ios",
        "guides/python/testing-on-android",
        "guides/python/hot-reload",
        "guides/python/packaging-desktop-app",
        "guides/python/publishing-static-website",
        "guides/python/logging",
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      link: {
        type: "generated-index",
        description:
          "Some of the awesome Flet tutorials to get your started:",
        slug: "/tutorials",
      },
      items: [
        "tutorials/python-todo",
        "tutorials/python-calculator",
        "tutorials/trello-clone",
        "tutorials/python-solitaire",
        "tutorials/python-realtime-chat",
      ],
    },
    {
      type: "category",
      label: "Reference",
      items: [
        "reference/colors",
        {
          type: "category",
          label: "CLI",
          link: {
            type: "doc",
            id: "reference/cli/index",
          },
          items: [
            "reference/cli/create",
            "reference/cli/run",
            "reference/cli/pack",
            "reference/cli/publish",
          ],
        }
      ],
    }
  ],
};
