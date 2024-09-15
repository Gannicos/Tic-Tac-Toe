import '../App.css';

export default function Home(){
    return(
        <div className='home-container'>
            <h1 className='title'>Tic-Tac-Toe in <span>React</span></h1>
            <h3>
                <p className='paragraph'>
                    <h2>About Tic-Tac-Toe</h2>
                <span>Tic-tac-toe</span> is a classic game that is commonly played among young children and is
known for its simple rules. It is played by two people who take turns <span>marking on X
or an O on a 3x3 grid.</span> The first person to mark three of their signs in a horizontal,
vertical, or diagonal row is the <span>winner.</span> If both players use an optimal strategy, the
game will always end in a draw. <a className='external-link' href='https://momath.org/wp-content/uploads/2021/08/Alyssa-Choi-Tic-Tac-Toe.pdf'>More...</a>
                </p>
                <p className='paragraph'>
                    <h2>About Mini-max algorithm</h2>
                <span>Mini-max algorithm</span> is a recursive or backtracking algorithm which is used in <span>decision-making and game
                theory.</span> It provides <span>an optimal move</span> for the player assuming that opponent is also playing optimally.
Mini-Max algorithm uses recursion to search through the game-tree. <a className='external-link' href='https://www.arsdcollege.ac.in/wp-content/uploads/2020/03/Artificial_Intelligence-week3.pdf'>More...</a>
                </p>
            </h3>
            <div className='about-container'>
                <div className='about'>
                    <h2><span>More</span> projects</h2>
                    <a className='external-link' href='https://github.com/Gannicos'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}