const chalk = require('chalk');
const dns = require('dns');


module.exports.find_ip_address = (req, res, next)=>{
  try {
    const { domainName } = req.body;
    dns.lookup( domainName, (err, addresses, family)=>{
      console.log(chalk.yellow( addresses ))
      res.json({ addresses })
    })
  } catch (err) {
    next(err, req, res);
  }
}


