// npm test -- -t "@smoke" // To run tagged tests

 // ln no 8 pkg.jsn "pretest": "npx ts-node src/helper/report/init.ts",

 
/* ln no 25 package.json dependency for multi report
// "dependencies": {
    "multiple-cucumber-html-reporter": "^3.4.0", 
    "winston": "^3.9.0"
  } */


/* Line no 21 Cucumber.json 
     "json:test-results/cucumber-report.json",
 */

/* Jenkins Password : 
2928ba21f79c476f889b6b2acb0dfa46
*/

/* Docker commands--
docker login 
docker tag imgname username/imgname
docker push username/imgname

----------------

docker volume create reports  
docker build -t rudeshatkar/mydoc .   

 */
