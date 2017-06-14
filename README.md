# domain-utils
There are many regex available over internet for validating domain names but none of those covers the complete validation. For a valid domain name: 
1. Use only letters, numbers, or hyphen ("-")
2. Domain names cannot begin or end with a hyphen
3. Domain names cannot have more than 63 characters, not including .AG, .COM.AG, .NET.AG, .ORG.AG, .EDU.AG, .GOV.AG, ETC.
4. Maximum length of a complete (Fully Qualified, FQDN) domain name (including .separators) is 255 characters
5. Minimum length of a domain name is 1 character, not including extensions.
6. A name may begin with a digit
7. One and two character domain names are allowed 

other rules are available at: http://www.nic.ag/rules.htm

## validateDomainName(domainName)
Validates domain name against the rules mentioned above.