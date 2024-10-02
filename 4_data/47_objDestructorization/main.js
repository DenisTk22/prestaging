/**
 * Дан объект link. Используя деструктуризацию объекта, создайте новые переменные со значениями 'blank', 'link', 'anchor', 'Click me'. Имена переменных используйте согласно ключам (где необходимо, используйте переименование, создав переменную с именем renamed).
 */

const link = {
    href: '#',
    title: 'simple link',
    target: 'blank',
    className: 'link',
    id: null,
    children: {
        span: {
            content: 'Click me',
            className: 'anchor',
        },
    },
}

const { 
    target,
    className,
    children: {
        span: {
            className: renamed_className
        }
    }, 
    children: {
        span: {
            content
        } 
    }
} = link;

console.log(target);
console.log(className);
console.log(renamed_className);
console.log(content);