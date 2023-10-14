import "./item.css";

function Item() {
    return (
    <div className="itemback">
        <div className="primeiraParte">
            <div>   
            
                <p className="titulo"><b>APP inventor brasil</b></p>

            </div>
        </div>
        <div className="SegParte">
            <div className="HeaderOpcoes">
                    <div>
                        <p className="HeaderBots"> Blog</p>
                    </div>
                    <div>
                        <p className="HeaderBots"> Blog 2</p>
                    </div>
                    <div>
                        <p className="HeaderBots"> Blog 3</p>
                    </div>
                    <div>
                        <p className="HeaderBots"> Blog 4</p>
                    </div>
            </div>
            <input type="text" className="procura" placeholder="Pesquise o que quiser"> </input>
        </div>
    </div>
    )
}

export default Item