import * as icons from 'lucide-react';

const iconNames = [
  'LayoutDashboard','TrendingUp','ShoppingCart','Wallet','History','PlusCircle','Trash2','Egg','Save','Users',
  'ArrowDownCircle','ArrowUpCircle','MinusCircle','AlertCircle','UserMinus','Store','User','Settings','Percent','Coins',
  'Lock','Unlock','Eye','EyeOff','LogOut','ShieldCheck','KeyRound','Filter','ListFilter','Calendar','UserCheck','Phone'
];

let missing = [];
for (const name of iconNames) {
  if (!icons[name]) missing.push(name);
}

if (missing.length === 0) {
  console.log('All icons found');
} else {
  console.log('Missing icons:', missing.join(', '));
}
