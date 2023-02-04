import React,{Component} from 'react';
export const livres = [
    {
        src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm81XoZa9dFFAFPY-LjxgJ-XAj-KeySicSvw&usqp=CAU",
        title : "Titre de livre 1",
        author: "Auteur de livre 1",
    },
    {
        src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm81XoZa9dFFAFPY-LjxgJ-XAj-KeySicSvw&usqp=CAU",
        title : "Titre de livre 2",
        author: "Auteur de livre 2"
    },

    {
        src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm81XoZa9dFFAFPY-LjxgJ-XAj-KeySicSvw&usqp=CAU",
        title : "Titre de livre 3",
        author: "Auteur de livre 3"
    },
]

class Livres extends React.Component{
    render(){
        return(
            <div className="livres">
                {this.props.liv.map((livre) => (
                    <div className="livre">
                    <img src={livre.src}/>
                    <h3>{livre.title}</h3>
                    <p>{livre.author}</p>
                    </div>
                ))}
                
            </div>
        )
    }
}


export default Livres;