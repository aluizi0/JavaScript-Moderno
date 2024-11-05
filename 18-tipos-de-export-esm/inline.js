// varios exports se quiser
export function inline() {
    console.log('Export nomeado inline');
}

// apenas 1 export default, podendo ser função anonima
export default function defaultInline() {
    console.log('Export default inline');
}