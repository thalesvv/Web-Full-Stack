export class Jogador {
    constructor(nome, email, categoria_preferida = "frutas", total_vitorias = 0, total_derrotas = 0){
        this.nome = nome;
        this.email = email;
        this.categoria_preferida = categoria_preferida;
        this.total_vitorias = total_vitorias;
        this.total_derrotas = total_derrotas;
    }

    perdeu_playboy() {
        this.total_derrotas += 1;
    }

    flawless_victory() {
        this.total_vitorias += 1;
    }
}

export function categorias_disponiveis () {
    return [
        "frutas",
        "países",
        "cores",
        "animes",
        "filmes",
        "esportes"
    ];
} 

export default {
    Jogador,
    cat_disp: categorias_disponiveis
    };