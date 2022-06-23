#!/bin/sh 
cd /Users/[C:/Users/varun/OneDrive/Desktop/multi-step-form-master] 
echo “Building React Project …” 
npm run build 
echo “Copying html file …” 
cp -r build html 
echo “Connecting to AWS VM and copying file to /var/www/html/ …” sudo scp -i ["C:/Users/varun/Music/ingestion.pem"] -r html [ec2-44-201-197-243.compute-1.amazonaws.com]:/var/www 
echo “Removing html file from local directory …” 
rm -r html