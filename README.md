# Парсинг html-кода с помощью регулярные выражения в js (без new DOMParser()).

<h3>Example: </h3>
<pre>
    <script>

        document.body.insertAdjacentHTML(
            'beforeend',
            template(tpl, obj)
        );

    </script>
</pre>

<h3>Example function: </h3>
<pre>
function template(tpl, obj){

    tpl = tpl.replace(/\n/g,'').replace(/\s{2,}/g,' ');

    let html_item = '';
    let block = '';
    let reg_exp = function(key){
        return new RegExp('{{' + key + '}}', 'g');
    }

    function parserBlock(obj_key){

        block = tpl.replace(
            new RegExp('{:'+obj_key+':}[\\s*---="-{-}]{1,}]?({:.'+obj_key+':})', 'g'),
            (match) => {
                html_item = match;
            }
        );

        html_item = html_item.replace(
            new RegExp('{:'+obj_key+':}|{:.'+obj_key+':}', 'g'),
            ''
        );

        let t = '';
        for(let items of obj[obj_key]){
            container = html_item;
            
            for(let i in items){
                if(i !== obj_key){
                    container = container.replace( reg_exp(i), items[i] );
                }else{
                    container = template(container, items[i]);
                }
            }
            t += container;
            
        }

        return block.replace(/undefined/, t);
    }
    
    for(let obj_key in obj){

        let container = '';

        if(typeof obj[obj_key] == 'string'){

            tpl = tpl.replace( reg_exp(obj_key), obj[obj_key] );

        }else{

            tpl = parserBlock(obj_key);

        }
        
    }
    return tpl;
}
</pre>
