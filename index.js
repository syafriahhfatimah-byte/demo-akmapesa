console.log(articles)

const container = document.querySelector('.article-list')

let tampilkanArticle = 3

function renderArticles() {
    container.innerHTML = ''
    for (let i = 0; i < tampilkanArticle; i++) {
        let article = `<article class="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
                        <div class="h-48 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
                            <img class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" src="${articles[i].Image}"></img>
                            <div class="absolute bottom-4 left-4">
                                <span class="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">${articles[i].category}</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                                ${articles[i].title}
                            </h3>
                            <p class="text-gray-300 mb-4 leading-relaxed">
                                ${articles[i].excerpt}
                            </p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-2 text-sm text-gray-400">
                                    <i class="fas fa-calendar"></i>
                                    <span>${articles[i].date}</span>
                                </div>
                                <a href="#" class="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                                    Baca Selengkapnya →
                                </a>
                            </div>
                        </div>
                    </article>`;
        container.innerHTML += article
    }
}

const loadMoreBtn = document.getElementById('loadMoreButton');
loadMoreBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if (tampilkanArticle === 6) {
        tampilkanArticle = 3
        loadMoreBtn.innerHTML = '<i class="fas fa-newspaper mr-2"></i>Lihat Semua Artikel'
    } else {
        tampilkanArticle = 6
        loadMoreBtn.innerHTML = '<i class="fa-solid fa-caret-up mr-2"></i>Tampilkan Sedikit Artikel'
    }
    renderArticles()
})
  renderArticles()