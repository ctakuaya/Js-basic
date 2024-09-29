function showTab(tabName) {
         const tabs = document.querySelectorAll('.tab-content');
         tabs.forEach(tab => {
             tab.style.display = 'none';
         });
         document.getElementById(tabName).style.display = 'block';
     }
     
     function calculateHCF() {
         const num1 = parseInt(document.getElementById('hcf-num1').value);
         const num2 = parseInt(document.getElementById('hcf-num2').value);
         let hcf = 1;
     
         for (let i = 1; i <= num1 && i <= num2; i++) {
             if (num1 % i === 0 && num2 % i === 0) {
                 hcf = i;
             }
         }
     
         document.getElementById('hcf-result').textContent = `HCF: ${hcf}`;
     }
     
     function calculateLCM() {
         const num1 = parseInt(document.getElementById('lcm-num1').value);
         const num2 = parseInt(document.getElementById('lcm-num2').value);
         const hcf = (num1, num2) => {
             let temp;
             while (num2 !== 0) {
                 temp = num2;
                 num2 = num1 % num2;
                 num1 = temp;
             }
             return num1;
         };
     
         const lcm = (num1 * num2) / hcf(num1, num2);
     
         document.getElementById('lcm-result').textContent = `LCM: ${lcm}`;
     }
     
     // Initialize the first tab as active
     document.addEventListener('DOMContentLoaded', () => {
         showTab('hcf');
     });