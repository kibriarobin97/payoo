const cards = document.querySelectorAll(".option-card");

for(const card of cards){
    card.addEventListener("click", function(){
        for(const c of cards){
            c.classList.remove('border-purple-400', 'text-purple-500', 'bg-purple-100', 'font-medium');
        }
        this.classList.add('border-purple-400', 'text-purple-500', 'bg-purple-100', 'font-medium')
    })
}