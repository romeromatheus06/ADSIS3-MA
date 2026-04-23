let mostrandoNovos = false;

function trocar() {
    const grupos = document.getElementById("grupos");

    if (!mostrandoNovos) {
     
        grupos.innerHTML = `
        
        <div class="card-grupo">
            <h3>Grupo D</h3>
            <ul>
                <li>Estados Unidos</li>
                <li>Paraguai</li>
                <li>Austrália</li>
                <li>Turquia</li>
            </ul>
            <details>
                <summary>Saiba mais</summary>
                <p>EUA jogam em casa.</p>
            </details>
        </div>

        <div class="card-grupo">
            <h3>Grupo E</h3>
            <ul>
                <li>Alemanha</li>
                <li>Equador</li>
                <li>Costa do Marfim</li>
                <li>Curaçao</li>
            </ul>
            <details>
                <summary>Saiba mais</summary>
                <p>Alemanha costuma dominar grupos.</p>
            </details>
        </div>

        <div class="card-grupo">
            <h3>Grupo F</h3>
            <ul>
                <li>Holanda</li>
                <li>Japão</li>
                <li>Tunísia</li>
                <li>Suécia</li>
            </ul>
            <details>
                <summary>Saiba mais</summary>
                <p>Holanda sempre forte em Copas.</p>
            </details>
        </div>
        `;

        document.getElementById("btnTrocar").innerText = "Voltar";
        mostrandoNovos = true;

    } else {
        
        grupos.innerHTML = `
        
        <div class="card-grupo">
            <h3>Grupo A</h3>
            <ul>
                <li>México</li>
                <li>África do Sul</li>
                <li>Coreia do Sul</li>
                <li>República Tcheca</li>
            </ul>
            <details>
                <summary>Saiba mais</summary>
                <p>O jogo de abertura será México x África do Sul.</p>
            </details>
        </div>

        <div class="card-grupo">
            <h3>Grupo B</h3>
            <ul>
                <li>Canadá</li>
                <li>Suíça</li>
                <li>Catar</li>
                <li>Bósnia</li>
            </ul>
            <details>
                <summary>Saiba mais</summary>
                <p>O Canadá joga em casa.</p>
            </details>
        </div>

        <div class="card-grupo">
            <h3>Grupo C</h3>
            <ul>
                <li>Brasil</li>
                <li>Marrocos</li>
                <li>Haiti</li>
                <li>Escócia</li>
            </ul>
            <details>
                <summary>Saiba mais</summary>
                <p>Brasil nunca perdeu para a Escócia.</p>
            </details>
        </div>
        `;

        document.getElementById("btnTrocar").innerText = "Próximo";
        mostrandoNovos = false;
    }
}