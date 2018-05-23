var masternodeContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"bytes8"}],"name":"has","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id1","type":"bytes32"},{"name":"id2","type":"bytes32"},{"name":"misc","type":"bytes32"}],"name":"register","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getId","outputs":[{"name":"id","type":"bytes8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"MasterNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"lastId","outputs":[{"name":"","type":"bytes8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"bytes8"}],"name":"getInfo","outputs":[{"name":"id1","type":"bytes32"},{"name":"id2","type":"bytes32"},{"name":"misc","type":"bytes32"},{"name":"preId","type":"bytes8"},{"name":"nextId","type":"bytes8"},{"name":"blockNumber","type":"uint256"},{"name":"account","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"etzPerNode","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"bytes8"},{"indexed":false,"name":"addr","type":"address"}],"name":"join","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"bytes8"},{"indexed":false,"name":"addr","type":"address"}],"name":"quit","type":"event"}]);
var masternode = masternodeContract.new(
    {
        from: web3.eth.accounts[0],
        data: '0x608060405234801561001057600080fd5b5061165e806100206000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306661abd146108ae57806316e7f171146108d95780634da274fd1461093957806365f68c8914610979578063a9edf68e14610a06578063c1292cc314610a1d578063c4e3ed9314610a7e578063ff5ecad214610bb4575b600080600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a90047801000000000000000000000000000000000000000000000000029350600360008577ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff191681526020019081526020016000206000015492506000341480156101ac57508377ffffffffffffffffffffffffffffffffffffffffffffffff1916600078010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff191614155b80156101c45750826000191660006001026000191614155b80156101f057506801158e460913d000003073ffffffffffffffffffffffffffffffffffffffff163110155b80156101fe57506000600154115b151561020957600080fd5b600360008577ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060030160009054906101000a90047801000000000000000000000000000000000000000000000000029150600360008577ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060030160089054906101000a90047801000000000000000000000000000000000000000000000000029050600078010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff19168277ffffffffffffffffffffffffffffffffffffffffffffffff19161415156103d25780600360008477ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060030160086101000a81548167ffffffffffffffff02191690837801000000000000000000000000000000000000000000000000900402179055505b600078010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff19168177ffffffffffffffffffffffffffffffffffffffffffffffff19161415156104b75781600360008377ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060030160006101000a81548167ffffffffffffffff02191690837801000000000000000000000000000000000000000000000000900402179055506104f2565b816000806101000a81548167ffffffffffffffff02191690837801000000000000000000000000000000000000000000000000900402179055505b60e060405190810160405280600060010260001916815260200160006001026000191681526020016000600102600019168152602001600078010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff19168152602001600078010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815250600360008677ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060008201518160000190600019169055602082015181600101906000191690556040820151816002019060001916905560608201518160030160006101000a81548167ffffffffffffffff021916908378010000000000000000000000000000000000000000000000009004021790555060808201518160030160086101000a81548167ffffffffffffffff021916908378010000000000000000000000000000000000000000000000009004021790555060a0820151816004015560c08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050506000780100000000000000000000000000000000000000000000000002600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548167ffffffffffffffff0219169083780100000000000000000000000000000000000000000000000090040217905550600180600082825403925050819055507f86d1ab9dbf33cb06567fbeb4b47a6a365cf66f632380589591255187f5ca09cd8433604051808377ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a13373ffffffffffffffffffffffffffffffffffffffff166108fc6801158e460913d000009081150290604051600060405180830381858888f193505050501580156108a7573d6000803e3d6000fd5b5050505050005b3480156108ba57600080fd5b506108c3610bdf565b6040518082815260200191505060405180910390f35b3480156108e557600080fd5b5061091f600480360381019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610be5565b604051808215151515815260200191505060405180910390f35b610977600480360381019080803560001916906020019092919080356000191690602001909291908035600019169060200190929190505050610c49565b005b34801561098557600080fd5b506109ba600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611284565b604051808277ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b348015610a1257600080fd5b50610a1b6112f2565b005b348015610a2957600080fd5b50610a32611352565b604051808277ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b348015610a8a57600080fd5b50610ac4600480360381019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061137c565b604051808860001916600019168152602001876000191660001916815260200186600019166000191681526020018577ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff191681526020018477ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff191681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200197505050505050505060405180910390f35b348015610bc057600080fd5b50610bc9611625565b6040518082815260200191505060405180910390f35b60015481565b60008060010260001916600360008477ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600001546000191614159050919050565b6000839050836000191660006001026000191614158015610c765750826000191660006001026000191614155b8015610c8e5750816000191660006001026000191614155b8015610d4f5750600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900478010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff1916600078010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff1916145b8015610db25750600360008277ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff191681526020019081526020016000206000015460001916600060010260001916145b8015610dc657506801158e460913d0000034145b1515610dd157600080fd5b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548167ffffffffffffffff021916908378010000000000000000000000000000000000000000000000009004021790555060e0604051908101604052808560001916815260200184600019168152602001836000191681526020016000809054906101000a900478010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff19168152602001600078010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff191681526020014381526020013373ffffffffffffffffffffffffffffffffffffffff16815250600360008377ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060008201518160000190600019169055602082015181600101906000191690556040820151816002019060001916905560608201518160030160006101000a81548167ffffffffffffffff021916908378010000000000000000000000000000000000000000000000009004021790555060808201518160030160086101000a81548167ffffffffffffffff021916908378010000000000000000000000000000000000000000000000009004021790555060a0820151816004015560c08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050600078010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff19166000809054906101000a900478010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff19161415156111935780600360008060009054906101000a900478010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060030160086101000a81548167ffffffffffffffff02191690837801000000000000000000000000000000000000000000000000900402179055505b806000806101000a81548167ffffffffffffffff0219169083780100000000000000000000000000000000000000000000000090040217905550600180600082825401925050819055507ff19f694d42048723a415f5eed7c402ce2c2e5dc0c41580c3f80e220db85ac3898133604051808377ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150505050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a90047801000000000000000000000000000000000000000000000000029050919050565b60007801000000000000000000000000000000000000000000000000026000806101000a81548167ffffffffffffffff02191690837801000000000000000000000000000000000000000000000000900402179055506000600181905550565b6000809054906101000a900478010000000000000000000000000000000000000000000000000281565b6000806000806000806000600360008977ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600001549650600360008977ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600101549550600360008977ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600201549450600360008977ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060030160009054906101000a90047801000000000000000000000000000000000000000000000000029350600360008977ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060030160089054906101000a90047801000000000000000000000000000000000000000000000000029250600360008977ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600401549150600360008977ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919395979092949650565b6801158e460913d00000815600a165627a7a723058200003d6d3d350f74c3d808417941e122e51cfe57b937e66b1b9502889830b04990029',
        gas: '4700000'
    }, function (e, contract){
        console.log(e, contract);
        if (typeof contract.address !== 'undefined') {
            console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
        }
    })