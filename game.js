
        let winner = 0;
        let compScore = 0;
        let playerScore = 0;

        function getRndInteger(min, max) 
            {
                return Math.floor(Math.random() * (max - min) ) + min;
            }
        function computerPlay()
          {
            let word = '';
            let num = getRndInteger(1, 4);
            switch(num)
            {
                case 1:
                    word = 'rock';
                    break;
                case 2:
                    word = "scissors";
                    break;
                case 3:
                    word = "paper";
                    break;
            }
            return word;
          }
        function playRound(compSel, playerSel)
          {
           if(playerSel == "rock" && compSel == "scissors")
           {
            console.log("You win!");
           } else if(playerSel == "rock" && compSel == "paper")
           {
            console.log("You lose...");
           } else if(playerSel == "rock" && compSel == "rock")
           {
            console.log("It is a draw.");
           } else if(playerSel == "scissors" && compSel == "paper")
           {
            console.log("You win!");
           } else if(playerSel == "scissors" && compSel == "rock")
           {
            console.log("You lose...")
           } else if(playerSel == "scissors" && compSel == "scissors") 
           {
            console.log("It is a draw.");
           } else if(playerSel == "paper" && compSel == "rock")
           {
            console.log("You win!");
           } else if(playerSel == "paper" && compSel == "scissors")
           {
            console.log("You lose...");
           } else if(playerSel == "paper" && compSel == "paper")
           {
            console.log("It is a draw.");
           }
          }
        //   let computerSelection = computerPlay();
        //   let playerSelection = prompt("Enter Rock, Paper or Scissors: ").toLowerCase();
          
        //   playRound(computerSelection, playerSelection);
        //   console.log("computer selection: " + computerSelection);
        //   console.log("player selection: " + playerSelection);
        
        function playRound2(compSel, playerSel)
          {
           if(playerSel == "rock" && compSel == "scissors")
           {
            console.log("You win!");
            return 1;
           } else if(playerSel == "rock" && compSel == "paper")
           {
            console.log("You lose...");
            return 0;
           } else if(playerSel == "rock" && compSel == "rock")
           {
            console.log("It is a draw.");
           } else if(playerSel == "scissors" && compSel == "paper")
           {
            console.log("You win!");
            return 1;
           } else if(playerSel == "scissors" && compSel == "rock")
           {
            console.log("You lose...");
            return 0;
           } else if(playerSel == "scissors" && compSel == "scissors") 
           {
            console.log("It is a draw.");
           } else if(playerSel == "paper" && compSel == "rock")
           {
            console.log("You win!");
            return 1;
           } else if(playerSel == "paper" && compSel == "scissors")
           {
            console.log("You lose...");
            return 0;
           } else if(playerSel == "paper" && compSel == "paper")
           {
            console.log("It is a draw.");
           }
          }
        function game()
          {
                let computerSelection = computerPlay();
                let playerSelection = prompt("Please enter Rock, Paper or Scissors: ").toLowerCase();

                while(playerSelection !== "rock" && playerSelection !=="paper" && playerSelection!=="scissors")
                {
                  playerSelection = prompt("Please enter Rock, Paper or Scissors: ").toLowerCase();
                }                
                                
                winner = playRound2(computerSelection, playerSelection);
                if(winner==1)
                {
                  playerScore++;
                    
                } else if(winner==0)
                {
                  compScore++;
                }
                    
          }
         let j = 0
         while(j<5) 
         {
            game();
            j++;
         } 
         console.log("Player's score is: " + playerScore);
         console.log("Computer's score is: " + compScore);
         if(playerScore>compScore)
         {
            console.log("You are the winner! Congratulations");
         } else if(playerScore<compScore)
         {
            console.log("You have lost the game... ");
         } else
         {
            console.log("It is a draw.")
        }
                   
             
    