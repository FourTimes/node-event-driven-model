

user: domino+ernst_young
token: YW84PUC52Q1OA5ZUX01F673LP9R2IS7SX5VZH3NJSW8VBRUNSOFLFA24KLLPVJL7



docker pull quay.io/domino/fleetcommand-agent:v47


domino-ey-logs
domino-ey-backup
domino-ey-userdata

# 
domino-ey-registry


# domain name

domino.mlearney.com


curl https://baltocdn.com/helm/signing.asc | sudo apt-key add -
sudo apt-get install apt-transport-https --yes
echo "deb https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
sudo apt-get update
sudo apt-get install helm2