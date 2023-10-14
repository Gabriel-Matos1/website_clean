import styles from "./foter.css"

function Foter() {
    return (
        <div className="fot">
            
            <div className="lado">
            
                <div className="fot_text">
                        
                        <h1>Conclusão</h1>
                        
                        <div className="text_sub">
                            <h3>Sites desenvolvidos </h3>
                            <ul className="ops">
                                <li className="list"> Blog 1</li>
                                <li className="list"> Blog 2</li>
                                <li className="list"> Blog 3</li>
                            </ul>
                            <h3>Projetos disponíveis </h3>
                            
                            <ul className="ops">
                                <li className="list"> Calculadora básica</li>
                                <li className="list"> API de cotação de moedas</li>
                                <li className="list"> API de verificação do tempo</li>
                            </ul>
                        </div>
                        
                        
                </div>

                <div className="img_img">
                    <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/05/Goku-El%C3%A9trico-PNG.png" width={"100%"}></img>
                </div>
                    
                <div className="contats">
                    <h1>Contato</h1>
                    <ul type="none" className="ops">
                        <li className="list_cont"> Gabriel.oli.matos321@hotmail.com</li>
                        <li className="list_cont"> (41) 9 9777-0140</li>
                        <li className="list_cont"> Não me ligue.</li>
                    </ul>
                </div>
                
            </div>
            <hr></hr>    
                        
                        <div className="direitos">
                            <p>@Todos os direitos reservados a Gabriel Oliveira</p>
                            
                        </div>
                        <br></br>
        </div>
)
}

export default Foter