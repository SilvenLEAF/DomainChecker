import { Request, Response, NextFunction } from 'express';
import chalk from 'chalk';
import dns from 'dns';





export const find_ip_address = (req: Request, res: Response, next: NextFunction)=>{
  try {
    const { domainName } = req.body;
    
    dns.lookup( domainName, (err, addresses, family)=>{
      console.log(chalk.yellow( addresses ))


      res.json({ addresses });


    });
  } catch (err) {
    next({err, req, res});
  }
}


