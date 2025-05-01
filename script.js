const output = document.getElementById("codeOutput");
const house = document.getElementById("house");
const chatOutput = document.getElementById("chatOutput");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");

const codeLines = [
  "// Initializing blockchain environment...",
  "loadModule('solana-network');",
  "connect(wallet.phantom);",
  "validate(wallet.address);",
  "syncTransaction('node1', timeout=5000);",
  "load('token-info', 'SOL');",
  "verifyTransaction(chain='Solana', version='v1.5.0');",
  "rpc.query('GET /blockchain/status')",
  "initializeSmartContract('TerminalHouseContract.sol');",
  "deploy('THOUSE-Token', supply=1b)",
  "applyTransactionFee(rate=0.0025)",
  "setValidatorParams(height=50, width=200)",
  "initStake('validator1')",
  "createMultisig('0xHouseVault')",
  "deployValidator('Validator123')",
  "processBlockChainQuery('getBlockNumber')",
  "monitorNodeHealth('node1')",
  "verifyTransaction('signed=true')",
  "getCurrentPrice('SOL/USDC')",
  "enableMempoolSync('true')",
  "optimizeNodePerformance()",
  "reserveMint('0xMinter')",
  "gasLimit.check()",
  "auditTokenMetadata()",
  "network.setLatency('low')",
  "contract.validate('HouseTokenSmart.sol')",
  "runTransaction('init', 10000, 'THOUSE')",
  "createNFT('CodeHouseNFT')",
  "registerNFT('Minted: CodeHouse')",
  "deployContract('House_v2')",
  "syncNode('SOL')",
  "RPC_Success_Logged",
  "ca: A4wxx27qyGLZEvBg8zM37QWKKdy743AfMK7PxRQLpump",
  "TRANSACTION_SUCCESSFUL"
];

const houseArt = `
    
                 _ _
                ( Y )
                 \ /  
                  \          /^\
                    )       //^\\
                 (         //   \\
                   )      //     \\
                  __     //       \\
                 |=^|   //    _    \\
               __|= |__//    (+)    \\
              /LLLLLLL//      ~      \\
             /LLLLLLL//               \\
            /LLLLLLL//                 \\
           /LLLLLLL//  |~[|]~| |~[|]~|  \\
           ^| [|] //   | [|] | | [|] |   \\
            | [|] ^|   |_[|]_| |_[|]_|   |^
         ___|______|                     |
        /LLLLLLLLLL|_____________________|
       /LLLLLLLLLLL/LLLLLLLLLLLLLLLLLLLLLL\
      /LLLLLLLLLLL/LLLLLLLLLLLLLLLLLLLLLLLL\
      ^||^^^^^^^^/LLLLLLLLLLLLLLLLLLLLLLLLLL\
       || |~[|]~|^^||^^^^^^^^^^||^|~[|]~|^||^^
       || | [|] |  ||  |~~~~|  || | [|] | ||
       || |_[|]_|  ||  | [] |  || |_[|]_| ||
       ||__________||  |   o|  ||_________||
     .'||][][][][][||  | [] |  ||[][][][][||.'.
    ."'||[][][][][]||_-`----'-_||][][][][]||"."
  .(')^(.)(').( )'^@/-- -- - --\@( )'( ).(( )^(.)^
 '( )^(`)'.(').( )@/-- -- - -- -\@ (.)'(.),( ).(').
 ".'.'." ." '.". @/- - --- -- - -\@ '.".'.".'.".'."
 ". '' ".".".'.'@/ - -- -- -- -- -\@".'..'".'."'.'.'
'.".".''.".''."@/ -- --- --- -- - -\@.".''.".''.".'".


`;

let index = 0;

function typeNextLine() {
  if (index < codeLines.length) {
    const line = codeLines[index];
    if (line.includes("ca:")) {
      output.innerHTML += `<span style="color:lime;font-weight:bold;">${line}</span>\n`;
    } else {
      output.innerHTML += line + "\n";
    }
    index++;
    setTimeout(typeNextLine, 80);
  } else {
    setTimeout(() => {
      house.style.display = "block";
      house.textContent = houseArt;
      setTimeout(() => {
        chatOutput.innerHTML += "Welcome to the Terminal! Type your commands...\n";
      }, 1000);
    }, 1000);
  }
}

// Random code responses related to the project
function randomCodeResponse() {
  const responses = [
    "System initialized successfully. Blockchain operations are now live.",
    "Coded for millions. This project will scale.",
    "Update ready: New validator network optimized.",
    "Network parameters successfully deployed for maximum efficiency.",
    "Project running on Solana blockchain. Trustworthy and secure.",
    "Transaction completed with zero errors. The code is solid.",
    "Building for the future. More updates coming soon.",
    "Blockchain synchronization complete. Ready for the next step.",
    "House Token successfully deployed. Community-driven growth.",
    "Optimizing blockchain performance for faster transactions.",
    "Error free: Smart contract validated and deployed.",
    "The future of decentralized finance is here with TerminalHouse.",
    "Trust the code. System is stable and fast.",
    "Maximum scalability achieved with distributed nodes.",
    "Real-time monitoring active. Your transactions are safe.",
    "All systems operational. Ready for more innovations.",
    "Smart contracts are optimized for quick execution.",
    "Performance metrics are excellent. Expect more updates soon.",
    "Your blockchain assets are secured with the latest encryption.",
    "Decentralized governance is now fully integrated.",
    "Transaction fees optimized. Saving costs on each transaction."
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

function handleUserInput() {
  const userCommand = chatInput.value.trim();
  if (userCommand !== "") {
    chatOutput.innerHTML += `> ${userCommand}\n`;
    chatOutput.innerHTML += `${randomCodeResponse()}\n`;
    chatInput.value = "";
    chatOutput.scrollTop = chatOutput.scrollHeight;
  }
}

sendButton.addEventListener("click", handleUserInput);
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleUserInput();
  }
});

typeNextLine();
