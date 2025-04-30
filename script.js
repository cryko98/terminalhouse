
const output = document.getElementById("codeOutput");
const house = document.getElementById("house");

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
  "deploy('THOUSE-Token', supply=50000000)",
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
  "ca: 0xF4bb5572c320cA16bBB5D3",
  "TRANSACTION_SUCCESSFUL"
];

const houseArt = `
      ) )        /\
     =====      /  \
    _|___|_____/ __ \
   |::::::::::/ |  | \:::::::::::|
   |:::::::::/  ====  \::::::::::|
   |::::::::/__________\:::::::::|
   |_________|  ____  |__________|
    | ______ | / || \ | _______ |
    ||  |   || ====== ||   |   ||
    ||--+---|| |    | ||---+---||
    ||__|___|| |   o| ||___|___||
    |========| |____| |=========|
   (^^-^^^^^-|________|-^^^--^^^)
   (,, , ,, ,/________\,,,, ,, ,)
  ','',,,,' /__________\,,,',',;;
`;

let index = 0;

function typeNextLine() {
  if (index < codeLines.length) {
    const line = codeLines[index];
    if (line.includes("ca:")) {
      output.innerHTML += `<span style="color:lime;font-weight:bold;">${line}</span>
`;
    } else {
      output.innerHTML += line + "
";
    }
    index++;
    setTimeout(typeNextLine, 80);
  } else {
    setTimeout(() => {
      house.style.display = "block";
      house.textContent = houseArt;
    }, 1000);
  }
}

typeNextLine();
