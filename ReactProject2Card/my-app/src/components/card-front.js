import React, {Component} from 'react';

export default class CardFront extends Component {
    render() {
        return(
            <div className='card-side side-front'>
                <div className='conrainer-fluid'>
                    <div className='row'>
                        <div className='col-xs-6'>
                            <img scr="https://cdn.pixabay.com/photo/2018/09/11/11/47/kitten-3669244__340.jpg" />
                        </div>
                        <div className="col-xs-6 sside-front-content">
                            <h2>Denis</h2>
                            <p>
                            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}