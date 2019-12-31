let tpl = `<div class="constructor-horizontal-nav">
    <ul class="items">
        {:items:}
        <li class="item">
            {{item}}  <strong>{{age}}</strong>
            <ul class="sub-menu">
                {:sub-items:}<li  class="sub-menu-item">{{subItem}}</li>{:.sub-items:}
            </ul>
        </li>
        {:.items:}
    </ul>

    <strong>{{name}}</strong>

    {:tests:}
        <p>{{item}}</p>
    {:.tests:}
</div>`;

let obj = {
            "name" : "Name 5465487",
            "tests" : [
                { "item": 'test - item - 1' },
                { "item": 'test - item - 2' },
                { "item": 'test - item - 3' },
                { "item": 'test - item - 4' },
                { "item": 'test - item - 5' }
            ],
            "items": [
                { "item": 'Swiss Re Group 1', "age" : 25, "items" : {
                    "sub-items" : [
                        {"subItem": "item subItem 1"},
                        {"subItem": "item subItem 2"},
                        {"subItem": "item subItem 3"},
                        {"subItem": "item subItem 4"},
                        {"subItem": "item subItem 5"}
                    ]
                } },
                { "item": "Swiss Re Institute", "age" : 21, "items" : {
                    "sub-items" : [
                        {"subItem": "item subItem 6"},
                        {"subItem": "item subItem 7"},
                        {"subItem": "item subItem 8"},
                        {"subItem": "item subItem 9"},
                        {"subItem": "item subItem 10"}
                    ]
                } },
                { "item": "Reinsurance", "age" : 51, "items" : {
                    "sub-items" : [
                        {"subItem": "item subItem 11"},
                        {"subItem": "item subItem 12"},
                        {"subItem": "item subItem 13"},
                        {"subItem": "item subItem 14"},
                        {"subItem": "item subItem 15"}
                    ]
                } },
                { "item": "Corporate Solutions", "age" : 55, "items" : {
                    "sub-items" : [
                        {"subItem": "item subItem 16"},
                        {"subItem": "item subItem 17"},
                        {"subItem": "item subItem 18"},
                        {"subItem": "item subItem 19"},
                        {"subItem": "item subItem 20"}
                    ]
                } },
                { "item": "Life Capital", "age" : 17, "items" : {
                    "sub-items" : [
                        {"subItem": "item subItem 21"},
                        {"subItem": "item subItem 22"},
                        {"subItem": "item subItem 23"},
                        {"subItem": "item subItem 24"},
                        {"subItem": "item subItem 25"}
                    ]
                } },
                { "item": "Swiss Re Foundation", "age" : 15, "items" : {
                    "sub-items" : [
                        {"subItem": "item subItem 21"},
                        {"subItem": "item subItem 22"},
                        {"subItem": "item subItem 23"},
                        {"subItem": "item subItem 24"},
                        {"subItem": "item subItem 25"}
                    ]
                } }
            ]
        }