import React, { useEffect, useState } from 'react';
import Repo from './repo';

export default () => {
    const [repos,setRepos] = useState([]);
    const [reposCount,setReposCount] = useState([]);

    useEffect( () => {
        const data = sessionStorage.getItem("repos");
        let myRepos;

        if(data){//verifico si existe la data en sessionStorage
            myRepos = JSON.parse(data);
            setReposCount(myRepos.length);
            //myRepos = myRepos.slice(1,7);
            
            return setRepos(myRepos)
        }

        async function fetchRepos(){
            const response = await fetch("https://api.github.com/users/davidpincheira/repos");
            myRepos = await response.json();
            setReposCount(myRepos.length);
            sessionStorage.setItem("repos", JSON.stringify(myRepos))
            setRepos(myRepos)
        }
        fetchRepos(); 
    }, [])
    return (
        <div className="max-w-4xl mx-auto mt-10">
            <header className="text-center">
                <h2 className="text-3xl font-bold">mi trabajo en open source</h2>
                <p>colaboracion y contribucion de codigo</p>
            </header>
            <ul className="repos-list">
                {
                    repos.map((repo)=>{
                        return <Repo repo={repo} key={repo.id}></Repo>
                    })
                }
            </ul>
            <div className="mt-8 text-center">
                <a href="https://github.com/davidpincheira" className="btn" target="_blank" rel="noopener noreferrer">
                    Ver Mas en GitHub({reposCount})
                </a>
            </div>
        </div>
    );
};