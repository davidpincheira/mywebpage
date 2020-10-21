import React, { useEffect, useState } from 'react';
import Repo from './repo';

export default () => {
    const [repos,setRepos] = useState([]);
    const [reposCount,setReposCount] = useState([]);

    useEffect( () => {
        const data = sessionStorage.getItem("repos");
        
        if(data){//verifico si existe la data en sessionStorage
            let myRepos;
            let myPostFav = [];
            myRepos = JSON.parse(data);
            setReposCount(myRepos.length);
            myRepos.map(a => 
                {
                    if(a.watchers>0){
                        myPostFav.push(a)
                    }
                }
            )
            return setRepos(myPostFav)
        }

        async function fetchRepos(){
            let myRepos;
            let myPostFav = [];
            const response = await fetch("https://api.github.com/users/davidpincheira/repos");
            myRepos = await response.json();
            setReposCount(myRepos.length);
            myRepos.map(a => 
                {
                    if(a.watchers>0){
                        myPostFav.push(a)
                    }
                }
            )
            sessionStorage.setItem("repos", JSON.stringify(myRepos))
            setRepos(myPostFav)
        }
        fetchRepos(); 
    }, [])
    return (
        <div className="max-w-4xl mx-auto mt-10">
            <header className="text-center">
                <h2 className="text-3xl font-bold mb-4">Projectos en Github</h2>
            </header>
            <ul className="repos-list">
                {
                    repos.map((repo)=>{ 
                        return <Repo repo={repo} key={repo.id}></Repo>
                    })
                }
            </ul>
            <div className="mt-8 text-center">
                <a href="https://github.com/davidpincheira" className="btn2 btn-green text-white bg-green-500" target="_blank" rel="noopener noreferrer">
                    Ver Mas en GitHub({reposCount})
                </a>
            </div>
        </div>
    );
};