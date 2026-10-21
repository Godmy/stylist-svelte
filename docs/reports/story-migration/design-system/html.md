# Story migration report: design-system / html

|      | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ---- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| html |      139 |             0 |               0 |           136 |                 3 |           0 |             0 |                                  139 |           0 |             0 |

| Family                      | Before            | After             | Recipe                         | State uses recipe | Controls | Presets | Token options | Layout     |
| --------------------------- | ----------------- | ----------------- | ------------------------------ | ----------------- | -------: | ------: | ------------- | ---------- |
| `atom/a`                    | contract          | contract          | `RecipeHtmlA`                  | —                 |       12 |       0 | —             | padded     |
| `atom/abbr`                 | contract          | contract          | `RecipeHtmlAbbr`               | —                 |        5 |       0 | —             | padded     |
| `atom/area`                 | contract          | contract          | `RecipeHtmlArea`               | —                 |       13 |       0 | —             | padded     |
| `atom/b`                    | contract          | contract          | `RecipeHtmlB`                  | —                 |        5 |       0 | —             | padded     |
| `atom/base`                 | contract          | contract          | `RecipeHtmlBase`               | —                 |        7 |       0 | —             | padded     |
| `atom/bdi`                  | contract          | contract          | `RecipeHtmlBdi`                | —                 |        5 |       0 | —             | padded     |
| `atom/bdo`                  | contract          | contract          | `RecipeHtmlBdo`                | —                 |        5 |       0 | —             | padded     |
| `atom/br`                   | contract          | contract          | `RecipeHtmlBr`                 | —                 |        5 |       0 | —             | padded     |
| `atom/button`               | contract          | contract          | `RecipeHtmlButton`             | —                 |        9 |       1 | —             | padded     |
| `atom/canvas`               | contract          | contract          | `RecipeHtmlCanvas`             | —                 |        7 |       0 | —             | padded     |
| `atom/cite`                 | contract          | contract          | `RecipeHtmlCite`               | —                 |        5 |       0 | —             | padded     |
| `atom/code`                 | contract          | contract          | `RecipeHtmlCode`               | —                 |        5 |       0 | —             | padded     |
| `atom/col`                  | contract          | contract          | `RecipeHtmlCol`                | —                 |        6 |       0 | —             | padded     |
| `atom/data`                 | contract          | contract          | `RecipeHtmlData`               | —                 |        6 |       0 | —             | padded     |
| `atom/del`                  | contract          | contract          | `RecipeHtmlDel`                | —                 |        7 |       0 | —             | padded     |
| `atom/dfn`                  | contract          | contract          | `RecipeHtmlDfn`                | —                 |        5 |       0 | —             | padded     |
| `atom/em`                   | contract          | contract          | `RecipeHtmlEm`                 | —                 |        5 |       0 | —             | padded     |
| `atom/embed`                | contract          | contract          | `RecipeHtmlEmbed`              | —                 |        9 |       0 | —             | padded     |
| `atom/h1`                   | contract          | contract          | `RecipeHtmlH1`                 | —                 |        5 |       0 | —             | padded     |
| `atom/h2`                   | contract          | contract          | `RecipeHtmlH2`                 | —                 |        5 |       0 | —             | padded     |
| `atom/h3`                   | contract          | contract          | `RecipeHtmlH3`                 | —                 |        5 |       0 | —             | padded     |
| `atom/h4`                   | contract          | contract          | `RecipeHtmlH4`                 | —                 |        5 |       0 | —             | padded     |
| `atom/h5`                   | contract          | contract          | `RecipeHtmlH5`                 | —                 |        5 |       0 | —             | padded     |
| `atom/h6`                   | contract          | contract          | `RecipeHtmlH6`                 | —                 |        5 |       0 | —             | padded     |
| `atom/hr`                   | contract          | contract          | `RecipeHtmlHr`                 | —                 |        5 |       0 | —             | padded     |
| `atom/i`                    | contract          | contract          | `RecipeHtmlI`                  | —                 |        5 |       0 | —             | padded     |
| `atom/iframe`               | contract          | contract          | `RecipeHtmlIframe`             | —                 |       13 |       0 | —             | padded     |
| `atom/img`                  | contract          | contract          | `RecipeHtmlImg`                | —                 |       13 |       0 | —             | padded     |
| `atom/input`                | contract          | contract          | `RecipeHtmlInput`              | —                 |       27 |       1 | —             | padded     |
| `atom/input-button`         | contract          | contract          | `RecipeHtmlInputButton`        | —                 |        7 |       1 | —             | padded     |
| `atom/input-checkbox`       | contract          | contract          | `RecipeHtmlInputCheckbox`      | —                 |        9 |       1 | —             | padded     |
| `atom/input-color`          | contract          | contract          | `RecipeHtmlInputColor`         | —                 |        7 |       1 | —             | padded     |
| `atom/input-date`           | contract          | contract          | `RecipeHtmlInputDate`          | —                 |       12 |       2 | —             | padded     |
| `atom/input-datetime-local` | contract          | contract          | `RecipeHtmlInputDatetimeLocal` | —                 |       12 |       2 | —             | padded     |
| `atom/input-email`          | contract          | contract          | `RecipeHtmlInputEmail`         | —                 |       14 |       2 | —             | padded     |
| `atom/input-file`           | contract          | contract          | `RecipeHtmlInputFile`          | —                 |        9 |       2 | —             | padded     |
| `atom/input-hidden`         | contract          | contract          | `RecipeHtmlInputHidden`        | —                 |        6 |       0 | —             | padded     |
| `atom/input-image`          | contract          | contract          | `RecipeHtmlInputImage`         | —                 |       10 |       1 | —             | padded     |
| `atom/input-month`          | contract          | contract          | `RecipeHtmlInputMonth`         | —                 |       12 |       2 | —             | padded     |
| `atom/input-number`         | contract          | contract          | `RecipeHtmlInputNumber`        | —                 |       13 |       2 | —             | padded     |
| `atom/input-password`       | contract          | contract          | `RecipeHtmlInputPassword`      | —                 |       14 |       2 | —             | padded     |
| `atom/input-radio`          | contract          | contract          | `RecipeHtmlInputRadio`         | —                 |        9 |       1 | —             | padded     |
| `atom/input-range`          | contract          | contract          | `RecipeHtmlInputRange`         | —                 |       10 |       1 | —             | padded     |
| `atom/input-reset`          | contract          | contract          | `RecipeHtmlInputReset`         | —                 |        7 |       1 | —             | padded     |
| `atom/input-search`         | contract          | contract          | `RecipeHtmlInputSearch`        | —                 |       14 |       2 | —             | padded     |
| `atom/input-submit`         | contract          | contract          | `RecipeHtmlInputSubmit`        | —                 |        7 |       1 | —             | padded     |
| `atom/input-tel`            | contract          | contract          | `RecipeHtmlInputTel`           | —                 |       14 |       2 | —             | padded     |
| `atom/input-text`           | contract          | contract          | `RecipeHtmlInputText`          | —                 |       14 |       2 | —             | padded     |
| `atom/input-time`           | contract          | contract          | `RecipeHtmlInputTime`          | —                 |       12 |       2 | —             | padded     |
| `atom/input-url`            | contract          | contract          | `RecipeHtmlInputUrl`           | —                 |       14 |       2 | —             | padded     |
| `atom/input-week`           | contract          | contract          | `RecipeHtmlInputWeek`          | —                 |       12 |       2 | —             | padded     |
| `atom/ins`                  | contract          | contract          | `RecipeHtmlIns`                | —                 |        7 |       0 | —             | padded     |
| `atom/kbd`                  | contract          | contract          | `RecipeHtmlKbd`                | —                 |        5 |       0 | —             | padded     |
| `atom/label`                | contract          | contract          | `RecipeHtmlLabel`              | —                 |        6 |       0 | —             | padded     |
| `atom/legend`               | contract          | contract          | `RecipeHtmlLegend`             | —                 |        5 |       0 | —             | padded     |
| `atom/link`                 | contract          | contract          | `RecipeHtmlLink`               | —                 |       13 |       0 | —             | padded     |
| `atom/mark`                 | contract          | contract          | `RecipeHtmlMark`               | —                 |        5 |       0 | —             | padded     |
| `atom/math`                 | contract + render | contract + render | `RecipeHtmlMath`               | —                 |        5 |       0 | —             | padded     |
| `atom/meta`                 | contract          | contract          | `RecipeHtmlMeta`               | —                 |        7 |       0 | —             | padded     |
| `atom/meter`                | contract          | contract          | `RecipeHtmlMeter`              | —                 |       11 |       0 | —             | padded     |
| `atom/noscript`             | contract          | contract          | `RecipeHtmlNoscript`           | —                 |        5 |       0 | —             | padded     |
| `atom/object`               | contract          | contract          | `RecipeHtmlObject`             | —                 |       10 |       0 | —             | padded     |
| `atom/option`               | contract          | contract          | `RecipeHtmlOption`             | —                 |        9 |       1 | —             | padded     |
| `atom/output`               | contract          | contract          | `RecipeHtmlOutput`             | —                 |        7 |       0 | —             | padded     |
| `atom/p`                    | contract          | contract          | `RecipeHtmlP`                  | —                 |        5 |       0 | —             | padded     |
| `atom/pre`                  | contract          | contract          | `RecipeHtmlPre`                | —                 |        5 |       0 | —             | padded     |
| `atom/progress`             | contract          | contract          | `RecipeHtmlProgress`           | —                 |        7 |       0 | —             | padded     |
| `atom/q`                    | contract          | contract          | `RecipeHtmlQ`                  | —                 |        6 |       0 | —             | padded     |
| `atom/raw-text`             | contract          | contract          | `RecipeHtmlRawText`            | —                 |        2 |       1 | —             | padded     |
| `atom/rp`                   | contract          | contract          | `RecipeHtmlRp`                 | —                 |        5 |       0 | —             | padded     |
| `atom/rt`                   | contract          | contract          | `RecipeHtmlRt`                 | —                 |        5 |       0 | —             | padded     |
| `atom/s`                    | contract          | contract          | `RecipeHtmlS`                  | —                 |        5 |       0 | —             | padded     |
| `atom/samp`                 | contract          | contract          | `RecipeHtmlSamp`               | —                 |        5 |       0 | —             | padded     |
| `atom/script`               | contract          | contract          | `RecipeHtmlScript`             | —                 |       10 |       0 | —             | padded     |
| `atom/selectedcontent`      | contract          | contract          | `RecipeHtmlSelectedcontent`    | —                 |        5 |       0 | —             | padded     |
| `atom/slot`                 | contract          | contract          | `RecipeHtmlSlot`               | —                 |        6 |       0 | —             | padded     |
| `atom/small`                | contract          | contract          | `RecipeHtmlSmall`              | —                 |        5 |       0 | —             | padded     |
| `atom/source`               | contract          | contract          | `RecipeHtmlSource`             | —                 |        9 |       0 | —             | padded     |
| `atom/span`                 | contract          | contract          | `RecipeHtmlSpan`               | —                 |        5 |       0 | —             | padded     |
| `atom/strong`               | contract          | contract          | `RecipeHtmlStrong`             | —                 |        5 |       0 | —             | padded     |
| `atom/style`                | contract          | contract          | `RecipeHtmlStyle`              | —                 |        6 |       0 | —             | padded     |
| `atom/sub`                  | contract          | contract          | `RecipeHtmlSub`                | —                 |        5 |       0 | —             | padded     |
| `atom/summary`              | contract          | contract          | `RecipeHtmlSummary`            | —                 |        5 |       0 | —             | padded     |
| `atom/sup`                  | contract          | contract          | `RecipeHtmlSup`                | —                 |        5 |       0 | —             | padded     |
| `atom/svg`                  | contract + render | contract + render | `RecipeHtmlSvg`                | —                 |        7 |       0 | —             | padded     |
| `atom/textarea`             | contract          | contract          | `RecipeHtmlTextarea`           | —                 |       17 |       2 | —             | padded     |
| `atom/time`                 | contract          | contract          | `RecipeHtmlTime`               | —                 |        6 |       0 | —             | padded     |
| `atom/title`                | contract          | contract          | `RecipeHtmlTitle`              | —                 |        6 |       0 | —             | padded     |
| `atom/track`                | contract          | contract          | `RecipeHtmlTrack`              | —                 |        9 |       0 | —             | padded     |
| `atom/u`                    | contract          | contract          | `RecipeHtmlU`                  | —                 |        5 |       0 | —             | padded     |
| `atom/var`                  | contract          | contract          | `RecipeHtmlVar`                | —                 |        5 |       0 | —             | padded     |
| `atom/wbr`                  | contract          | contract          | `RecipeHtmlWbr`                | —                 |        5 |       0 | —             | padded     |
| `molecule/audio`            | contract          | contract          | `RecipeHtmlAudio`              | —                 |       12 |       0 | —             | padded     |
| `molecule/colgroup`         | contract          | contract          | `RecipeHtmlColgroup`           | —                 |        6 |       0 | —             | padded     |
| `molecule/datalist`         | contract          | contract          | `RecipeHtmlDatalist`           | —                 |        5 |       0 | —             | padded     |
| `molecule/details`          | contract          | contract          | `RecipeHtmlDetails`            | —                 |        7 |       1 | —             | padded     |
| `molecule/dl`               | contract          | contract          | `RecipeHtmlDl`                 | —                 |        5 |       0 | —             | padded     |
| `molecule/fieldset`         | contract          | contract          | `RecipeHtmlFieldset`           | —                 |        7 |       1 | —             | padded     |
| `molecule/figure`           | contract          | contract          | `RecipeHtmlFigure`             | —                 |        5 |       0 | —             | padded     |
| `molecule/hgroup`           | contract          | contract          | `RecipeHtmlHgroup`             | —                 |        5 |       0 | —             | padded     |
| `molecule/map`              | contract          | contract          | `RecipeHtmlMap`                | —                 |        6 |       0 | —             | padded     |
| `molecule/menu`             | contract          | contract          | `RecipeHtmlMenu`               | —                 |        5 |       0 | —             | padded     |
| `molecule/ol`               | contract          | contract          | `RecipeHtmlOl`                 | —                 |        8 |       0 | —             | padded     |
| `molecule/optgroup`         | contract          | contract          | `RecipeHtmlOptgroup`           | —                 |        7 |       1 | —             | padded     |
| `molecule/picture`          | contract          | contract          | `RecipeHtmlPicture`            | —                 |        5 |       0 | —             | padded     |
| `molecule/ruby`             | contract          | contract          | `RecipeHtmlRuby`               | —                 |        5 |       0 | —             | padded     |
| `molecule/select`           | contract          | contract          | `RecipeHtmlSelect`             | —                 |       11 |       2 | —             | padded     |
| `molecule/table`            | contract          | contract          | `RecipeHtmlTable`              | —                 |        5 |       0 | —             | padded     |
| `molecule/tbody`            | contract          | contract          | `RecipeHtmlTbody`              | —                 |        5 |       0 | —             | padded     |
| `molecule/tfoot`            | contract          | contract          | `RecipeHtmlTfoot`              | —                 |        5 |       0 | —             | padded     |
| `molecule/thead`            | contract          | contract          | `RecipeHtmlThead`              | —                 |        5 |       0 | —             | padded     |
| `molecule/tr`               | contract          | contract          | `RecipeHtmlTr`                 | —                 |        5 |       0 | —             | padded     |
| `molecule/ul`               | contract          | contract          | `RecipeHtmlUl`                 | —                 |        5 |       0 | —             | padded     |
| `molecule/video`            | contract          | contract          | `RecipeHtmlVideo`              | —                 |       16 |       0 | —             | padded     |
| `organism/address`          | contract          | contract          | `RecipeHtmlAddress`            | —                 |        5 |       0 | —             | padded     |
| `organism/article`          | contract          | contract          | `RecipeHtmlArticle`            | —                 |        5 |       0 | —             | padded     |
| `organism/aside`            | contract          | contract          | `RecipeHtmlAside`              | —                 |        5 |       0 | —             | padded     |
| `organism/blockquote`       | contract          | contract          | `RecipeHtmlBlockquote`         | —                 |        6 |       0 | —             | padded     |
| `organism/caption`          | contract          | contract          | `RecipeHtmlCaption`            | —                 |        5 |       0 | —             | padded     |
| `organism/dd`               | contract          | contract          | `RecipeHtmlDd`                 | —                 |        5 |       0 | —             | padded     |
| `organism/dialog`           | contract          | contract          | `RecipeHtmlDialog`             | —                 |        6 |       1 | —             | padded     |
| `organism/div`              | contract          | contract          | `RecipeHtmlDiv`                | —                 |        5 |       0 | —             | padded     |
| `organism/dt`               | contract          | contract          | `RecipeHtmlDt`                 | —                 |        5 |       0 | —             | padded     |
| `organism/figcaption`       | contract          | contract          | `RecipeHtmlFigcaption`         | —                 |        5 |       0 | —             | padded     |
| `organism/footer`           | contract          | contract          | `RecipeHtmlFooter`             | —                 |        5 |       0 | —             | padded     |
| `organism/form`             | contract          | contract          | `RecipeHtmlForm`               | —                 |       13 |       0 | —             | padded     |
| `organism/header`           | contract          | contract          | `RecipeHtmlHeader`             | —                 |        5 |       0 | —             | padded     |
| `organism/li`               | contract          | contract          | `RecipeHtmlLi`                 | —                 |        6 |       0 | —             | padded     |
| `organism/main`             | contract          | contract          | `RecipeHtmlMain`               | —                 |        5 |       0 | —             | padded     |
| `organism/nav`              | contract          | contract          | `RecipeHtmlNav`                | —                 |        5 |       0 | —             | padded     |
| `organism/search`           | contract          | contract          | `RecipeHtmlSearch`             | —                 |        5 |       0 | —             | padded     |
| `organism/section`          | contract          | contract          | `RecipeHtmlSection`            | —                 |        5 |       0 | —             | padded     |
| `organism/td`               | contract          | contract          | `RecipeHtmlTd`                 | —                 |        7 |       0 | —             | padded     |
| `organism/template`         | contract          | contract          | `RecipeHtmlTemplate`           | —                 |        6 |       0 | —             | padded     |
| `organism/th`               | contract          | contract          | `RecipeHtmlTh`                 | —                 |        9 |       0 | —             | padded     |
| `page/html`                 | contract          | contract          | `RecipeHtmlHtml`               | —                 |        5 |       0 | —             | fullscreen |
| `template/body`             | contract          | contract          | `RecipeHtmlBody`               | —                 |        5 |       0 | —             | fullscreen |
| `template/head`             | contract          | contract          | `RecipeHtmlHead`               | —                 |        5 |       0 | —             | fullscreen |
| `template/node`             | contract + render | contract + render | `RecipeHtmlNode`               | —                 |        0 |       0 | —             | padded     |

## Custom renders

- `atom/math`: MathML content cannot be expressed as an HtmlNode tree.
- `atom/svg`: SVG content cannot be expressed as an HtmlNode tree.
- `template/node`: the tree comes from the story args.

[design-system](README.md) · [All modules](../README.md)
