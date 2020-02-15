# 基本語法

## 註解

```html
<!-- 註解 -->
<!-- vscode : Ctrl + / -->
```

## 區塊自動縮排
vscode -> alt + shift + F

## id, class
```html
    <style type="text/css">
        // . -> class
        div.panel,
        p.flip {
            margin: 0px;//外距(與父元素之間的距離)
            padding: 5px;//內距(與子元素之間的距離)
            text-align: center;
            background: #e5eecc;
            border: solid 1px #c3c3c3;//邊框
        }

        div.panel {
            height: 120px;
            display: none;
        }
        
        // # -> id
        #click_again {
            display: none;
        }
    </style>
```