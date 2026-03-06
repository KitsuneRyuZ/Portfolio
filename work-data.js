// ====================================
// WORK ITEMS DATABASE
// ====================================
// To add videos: Replace empty videoUrl strings with YouTube embed URLs
// Format: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
//
// Example:
// If your YouTube URL is: https://www.youtube.com/watch?v=dQw4w9WgXcQ
// Your videoUrl should be: "https://www.youtube.com/embed/dQw4w9WgXcQ"
// ====================================

const workItems = {
  auction: {
    title: "Auction House System",
    category: "Economy & Trading",
    tech: "Skript • GUI Design • Economy Integration",
    description: `
      <p>A premium, feature-rich auction house system that transforms server economy with stunning visual design and enterprise-grade functionality. This isn't your average marketplace—it's a complete trading platform with gradient-themed UI, advanced sorting, transaction history, and real-time search capabilities.</p>

      <h3>Core Features</h3>
      
      <div class="feature-grid">
        <div class="feature-box">
          <h5>🎨 Visual Excellence</h5>
          <p>Gold-amber gradient UI with custom glass pane borders, smooth animations, and professional typography using hex color codes</p>
        </div>
        <div class="feature-box">
          <h5>📊 Smart Sorting</h5>
          <p>Multiple sort modes: price ascending/descending, newest listings, expiring soon, with bubble-sort algorithm implementation</p>
        </div>
        <div class="feature-box">
          <h5>🔍 Advanced Search</h5>
          <p>Real-time player search, filter by seller, browse your own listings, with dynamic chat input system</p>
        </div>
        <div class="feature-box">
          <h5>📜 Transaction History</h5>
          <p>Complete purchase and sales history with purple-magenta themed GUI, tracking up to 20 recent transactions per player</p>
        </div>
      </div>

      <h3>Technical Implementation</h3>
      
      <h4>Listing System</h4>
      <ul>
        <li><strong>Dynamic Pricing:</strong> Sellers set their own prices with full control over listing duration (1-7 days)</li>
        <li><strong>Amount Control:</strong> List partial stacks or full quantities with automatic item removal from inventory</li>
        <li><strong>Expiry Management:</strong> Automatic cleanup of expired listings with timestamp tracking</li>
        <li><strong>Custom Item Support:</strong> Preserves item names, lore, enchantments, and NBT data perfectly</li>
      </ul>

      <h4>GUI Architecture</h4>
      <ul>
        <li><strong>Pagination System:</strong> 28 items per page with smooth navigation, calculated inner slots (avoiding borders)</li>
        <li><strong>Gradient Borders:</strong> Custom-designed borders using stained glass panes with hex color gradients</li>
        <li><strong>Control Panel:</strong> Bottom row with filter toggle, search, history, sort options, and navigation buttons</li>
        <li><strong>Real-time Updates:</strong> GUI refreshes on every action (buy, cancel, sort, filter)</li>
      </ul>

      <div class="command-box">
        <strong>Commands:</strong><br>
        <code>/ah</code> - Open main auction house<br>
        <code>/ah sell &lt;price&gt; &lt;amount&gt; [days]</code> - List item in hand<br>
        <code>/ah find &lt;player&gt;</code> - Browse specific seller<br>
        <code>/ah history</code> - View transaction history
      </div>

      <h3>Economy Integration</h3>
      
      <ul>
        <li><strong>Vault Compatible:</strong> Seamless integration with any economy plugin</li>
        <li><strong>Transaction Security:</strong> Balance checks before purchase, automatic money transfer</li>
        <li><strong>Seller Notifications:</strong> Real-time alerts when items sell with formatted messages</li>
        <li><strong>Logging System:</strong> Complete audit trail of all purchases and sales</li>
      </ul>

      <h3>User Experience Features</h3>
      
      <ul>
        <li><strong>Visual Feedback:</strong> Color-coded messages (green for success, red for errors, gold for sales)</li>
        <li><strong>Sound Effects:</strong> Professional audio cues (experience orbs, villager sounds)</li>
        <li><strong>Smart Cancellation:</strong> Right-click to cancel your own listings with instant item return</li>
        <li><strong>Click Protection:</strong> Prevents buying your own items, validates seller status</li>
        <li><strong>Filter Modes:</strong> Browse all, view only yours, search by player name</li>
      </ul>

      <div class="stats-highlight">
        <h4>Performance Optimizations</h4>
        <ul>
          <li>Efficient sorting algorithm with early termination</li>
          <li>Session-based GUI data cleanup on quit/close</li>
          <li>Sorted lists cached per player to reduce computation</li>
          <li>Minimal variable storage with automatic cleanup</li>
          <li>Optimized item display with custom name extraction function</li>
        </ul>
      </div>

      <h3>Design Philosophy</h3>
      
      <p>This auction house is built with a focus on <strong>visual appeal</strong>, <strong>performance</strong>, and <strong>user experience</strong>. The gold/amber/lime gradient theme creates a premium marketplace feel, while the underlying architecture ensures smooth operation even with hundreds of active listings.</p>

      <p>Every detail is crafted for professionalism—from the hex color-coded messages to the precisely aligned borders, from the bubble-sort implementation to the smart search system. This is the kind of system that makes servers stand out.</p>

      <h3>Perfect For</h3>
      <ul>
        <li>Survival servers needing a player-driven economy</li>
        <li>Skyblock networks with active trading communities</li>
        <li>Prison servers with competitive markets</li>
        <li>Any server wanting a premium trading experience</li>
      </ul>
    `,
    videoUrl: "portfolio-auction.mp4" // ADD YOUR YOUTUBE EMBED URL HERE
  },

  bounty: {
    title: "Bounty System",
    category: "PvP & Competition",
    tech: "Skript • Combat Integration • Economy",
    description: `
      <p>A competitive PvP bounty system that adds excitement and reward to player combat. Place bounties on enemies, increase existing bounties, and claim rewards for successful kills. Features a clean GUI with pagination, cooldown management, and server-wide notifications.</p>

      <h3>Core Mechanics</h3>
      
      <div class="feature-grid">
        <div class="feature-box">
          <h5>⚔️ Bounty Creation</h5>
          <p>Players can place money bounties on others with customizable amounts and 1-minute cooldown system</p>
        </div>
        <div class="feature-box">
          <h5>📈 Bounty Stacking</h5>
          <p>Multiple players can add to existing bounties, creating massive reward pools</p>
        </div>
        <div class="feature-box">
          <h5>🎯 Claim System</h5>
          <p>Automatic reward distribution on kill with broadcast notifications and title alerts</p>
        </div>
        <div class="feature-box">
          <h5>📋 Bounty List GUI</h5>
          <p>Multi-page GUI showing all active bounties with player skulls and amounts</p>
        </div>
      </div>

      <h3>System Features</h3>
      
      <h4>Bounty Management</h4>
      <ul>
        <li><strong>Smart Cooldowns:</strong> 1-minute cooldown between bounty placements with time-remaining feedback</li>
        <li><strong>Balance Validation:</strong> Checks player balance before accepting bounty, prevents overspending</li>
        <li><strong>Incremental Bounties:</strong> Add to existing bounties without creating duplicates</li>
        <li><strong>Automatic Cleanup:</strong> Bounties clear on successful claim, no manual management needed</li>
      </ul>

      <h4>GUI System</h4>
      <ul>
        <li><strong>21 Bounties Per Page:</strong> Clean 3x7 layout with red stained glass borders</li>
        <li><strong>Player Skulls:</strong> Visual representation with player heads and bounty amounts in lore</li>
        <li><strong>Pagination:</strong> Next/back navigation with custom function for page calculations</li>
        <li><strong>Info Crystal:</strong> Center slot with instructions on how to use the system</li>
      </ul>

      <div class="command-box">
        <strong>Commands:</strong><br>
        <code>/bounty create &lt;player&gt; &lt;amount&gt;</code> - Place or add to bounty<br>
        <code>/bountys</code> - Open bounty list GUI<br>
        <code>/checkbounty [player]</code> - Check if player has bounty
      </div>

      <h3>Combat Integration</h3>
      
      <ul>
        <li><strong>Death Detection:</strong> Automatic bounty claim on PvP kill</li>
        <li><strong>Attacker Validation:</strong> Ensures killer is a player (not mob/environment)</li>
        <li><strong>Instant Rewards:</strong> Money transferred to killer's balance immediately</li>
        <li><strong>Broadcast System:</strong> Server-wide announcements for bounty events</li>
      </ul>

      <h3>Notification System</h3>
      
      <h4>Bounty Placed</h4>
      <ul>
        <li>Server broadcast announcing new bounty with player names and amounts</li>
        <li>Title alert sent to target player with warning message</li>
        <li>Different messages for new vs. increased bounties</li>
      </ul>

      <h4>Bounty Claimed</h4>
      <ul>
        <li>Success message to killer with amount earned</li>
        <li>Server broadcast announcing the claim</li>
        <li>Automatic bounty removal from system</li>
      </ul>

      <div class="stats-highlight">
        <h4>Technical Details</h4>
        <ul>
          <li><strong>Pagination Function:</strong> Custom reusable function for multi-page GUIs</li>
          <li><strong>Time Management:</strong> Uses <code>now</code> variable for precise cooldown tracking</li>
          <li><strong>Permission System:</strong> <code>bounty.set</code> and <code>bounty.check</code> permissions</li>
          <li><strong>Data Storage:</strong> Variables for bounty amounts, cooldowns per player UUID</li>
          <li><strong>GUI Click Handling:</strong> Smart detection of navigation vs. info items</li>
        </ul>
      </div>

      <h3>Permissions</h3>
      <ul>
        <li><code>bounty.set</code> - Create and add to bounties</li>
        <li><code>bounty.check</code> - Check bounty status of players</li>
      </ul>

      <h3>Use Cases</h3>
      
      <p>This bounty system is perfect for creating <strong>competitive PvP environments</strong> where players can hire others to take down rivals. It encourages combat, creates player-driven conflict, and adds economic incentive to PvP activities.</p>

      <p>Ideal for <strong>faction servers</strong>, <strong>prison networks</strong>, <strong>anarchy servers</strong>, or any competitive environment where player conflict is a core mechanic. The system is lightweight, easy to use, and adds significant depth to PvP gameplay.</p>

      <h3>Design Highlights</h3>
      <ul>
        <li>Clean gold/red color scheme matching combat theme</li>
        <li>Prevents spam with smart cooldown system</li>
        <li>Scalable pagination for unlimited bounties</li>
        <li>Clear visual feedback with titles and broadcasts</li>
        <li>Economy-balanced with validation checks</li>
      </ul>
    `,
    videoUrl: "portfolio-bounty.mp4" // ADD YOUR YOUTUBE EMBED URL HERE
  },

  fishing: {
    title: "Advanced Fishing Minigame",
    category: "Mini-game & Collection",
    tech: "Skript • Custom Heads • GUI System • Progression",
    description: `
      <p>An immersive fishing minigame featuring <strong>50 unique fish species</strong> with custom player heads, rarity tiers, upgradeable legendary rod, and comprehensive collection tracking. This system transforms vanilla fishing into a full-featured progression experience with visual polish and depth.</p>

      <h3>Fish Collection System</h3>
      
      <div class="stats-highlight">
        <h4>50 Unique Fish Species Across 5 Rarity Tiers</h4>
        <ul>
          <li><strong>Common (40%):</strong> 20 fish at 2% each - Basic species like Bass, Trout, Catfish ($8-$15 value)</li>
          <li><strong>Uncommon (30%):</strong> 15 fish at 2% each - Striped Bass, Rainbow Trout, Koi ($20-$40 value)</li>
          <li><strong>Rare (20%):</strong> 10 fish at 2% each - Stingray, Swordfish, Octopus ($50-$80 value)</li>
          <li><strong>Epic (8%):</strong> 4 fish at 2% each - Giant Tuna, Megalodon, Sea Serpent ($100-$200 value)</li>
          <li><strong>Legendary (2%):</strong> 1 fish at 2% - Kraken, the ultimate catch ($500 value)</li>
        </ul>
      </div>

      <h3>Legendary Fishing Rod</h3>
      
      <p>Players receive a <strong>custom legendary fishing rod</strong> with dynamic lore that updates in real-time. The rod features multiple stat tracking sections and upgrade capabilities:</p>

      <h4>Rod Statistics Display</h4>
      <ul>
        <li><strong>Total Caught:</strong> Lifetime fish catches tracked globally</li>
        <li><strong>Unique Species:</strong> Collection progress (X/50 fish discovered)</li>
        <li><strong>Enchantment Levels:</strong> Lure and Luck of the Sea upgrade tiers</li>
        <li><strong>Money Multiplier:</strong> Sell value bonus percentage</li>
      </ul>

      <h4>Visual Design</h4>
      <ul>
        <li>Cyan/gold gradient theme with custom Unicode characters</li>
        <li>Sectioned lore with borders using box-drawing characters</li>
        <li>Color-coded sections (stats, enchantments, money bonus, upgrades)</li>
        <li>Real-time updates when catching fish or upgrading</li>
      </ul>

      <div class="feature-grid">
        <div class="feature-box">
          <h5>⚡ Lure Enchantment</h5>
          <p>Reduces fishing wait time with upgradeable levels, displayed in cyan with level indicators</p>
        </div>
        <div class="feature-box">
          <h5>✦ Luck of the Sea</h5>
          <p>Increases rare fish chances with progressive upgrades shown in magenta</p>
        </div>
        <div class="feature-box">
          <h5>💰 Money Multiplier</h5>
          <p>Bonus sell value system (1.0x to 2.0x+) displayed in green with percentage bonus</p>
        </div>
        <div class="feature-box">
          <h5>📊 Collection Tracking</h5>
          <p>Tracks unique species caught with progress indicator and total fish count</p>
        </div>
      </div>

      <h3>Fish Mechanics</h3>
      
      <h4>Custom Player Heads</h4>
      <ul>
        <li>Each fish has a unique Minecraft player head texture</li>
        <li>Custom names with hex color codes matching rarity</li>
        <li>Multi-line lore with species description and stats</li>
        <li>Sell values displayed in lore for easy reference</li>
      </ul>

      <h4>Catch System</h4>
      <ul>
        <li><strong>Weighted Rarity:</strong> Percentage-based catch rates ensure balanced progression</li>
        <li><strong>Visual Feedback:</strong> Custom messages with rarity-specific colors</li>
        <li><strong>Sound Effects:</strong> Different sounds for different rarity tiers</li>
        <li><strong>Auto-tracking:</strong> Catches recorded in player statistics automatically</li>
      </ul>

      <div class="command-box">
        <strong>Commands:</strong><br>
        <code>/fishingrod [player]</code> - Give legendary rod (admin/self)<br>
        <code>/fishcollection</code> - View collection GUI<br>
        <code>/upgraderod</code> - Open rod upgrade menu (shift+left click rod)
      </div>

      <h3>Upgrade System</h3>
      
      <ul>
        <li><strong>Progressive Costs:</strong> Upgrades get more expensive as levels increase</li>
        <li><strong>Multiple Paths:</strong> Choose between Lure, Luck, or Money multiplier</li>
        <li><strong>Visual Feedback:</strong> Rod lore updates instantly on upgrade</li>
        <li><strong>Sound Cues:</strong> Level-up sounds confirm successful upgrades</li>
        <li><strong>Balance System:</strong> Requires economy integration for upgrade costs</li>
      </ul>

      <h3>Collection GUI</h3>
      
      <p>A comprehensive GUI displaying all 50 fish species with collection status:</p>

      <ul>
        <li><strong>Caught Fish:</strong> Shown with their custom heads and full details</li>
        <li><strong>Undiscovered Fish:</strong> Displayed as barrier blocks with "???" names</li>
        <li><strong>Rarity Sections:</strong> Organized by tier with color-coded separators</li>
        <li><strong>Stats Panel:</strong> Total caught, unique species, completion percentage</li>
        <li><strong>Sell All Option:</strong> Quick-sell all caught fish with multiplier bonus</li>
      </ul>

      <div class="stats-highlight">
        <h4>Technical Implementation</h4>
        <ul>
          <li><strong>Profile Data:</strong> Uses Minecraft profile JSON for custom heads</li>
          <li><strong>Efficient Storage:</strong> Variables organized by fish ID and player UUID</li>
          <li><strong>Lore Building:</strong> Dynamic function constructs rod lore from stats</li>
          <li><strong>Unique Counting:</strong> Function calculates discovered species count</li>
          <li><strong>Auto-updates:</strong> Rod lore refreshes on catch/upgrade events</li>
        </ul>
      </div>

      <h3>Fish Species Examples</h3>
      
      <h4>Common Tier</h4>
      <ul>
        <li><strong>Common Bass:</strong> Basic freshwater fish ($10)</li>
        <li><strong>River Trout:</strong> Small but quick trout ($12)</li>
        <li><strong>Gray Catfish:</strong> Bottom-dwelling fish ($15)</li>
      </ul>

      <h4>Rare Tier</h4>
      <ul>
        <li><strong>Hammerhead Shark:</strong> Distinctive ocean predator ($65)</li>
        <li><strong>Swordfish:</strong> Fast deep-sea hunter ($70)</li>
        <li><strong>Jellyfish:</strong> Translucent drifter ($55)</li>
      </ul>

      <h4>Legendary Tier</h4>
      <ul>
        <li><strong>Kraken:</strong> Mythical deep-sea creature worth $500, ultimate collection goal</li>
      </ul>

      <h3>Player Engagement Features</h3>
      
      <ul>
        <li><strong>Progression System:</strong> Clear goals with 50 fish to discover</li>
        <li><strong>Visual Rewards:</strong> Beautiful custom heads as trophies</li>
        <li><strong>Economic Integration:</strong> Sell fish for money with multiplier bonuses</li>
        <li><strong>Upgrade Paths:</strong> Multiple ways to improve fishing efficiency</li>
        <li><strong>Collection Completion:</strong> Encourages long-term player retention</li>
      </ul>

      <h3>Perfect For</h3>
      
      <p>This fishing system is ideal for servers looking to add a <strong>calming, rewarding side activity</strong> that doesn't require combat. It's perfect for:</p>

      <ul>
        <li>Survival servers wanting peaceful progression content</li>
        <li>Skyblock networks needing alternative money-making methods</li>
        <li>Towny/economy servers with active trading communities</li>
        <li>Servers wanting to reward exploration and patience</li>
      </ul>

      <h3>Design Philosophy</h3>
      
      <p>Built with <strong>visual polish</strong> as a priority—every fish has a custom texture, every message uses hex colors, and the rod's lore is meticulously formatted. The system balances <strong>accessibility</strong> (common fish are easy to catch) with <strong>long-term goals</strong> (legendary Kraken is rare and valuable).</p>

      <p>The upgrade system provides <strong>continuous progression</strong>, the collection tracking creates <strong>completionist appeal</strong>, and the economy integration ensures <strong>practical value</strong> beyond just cosmetic collecting.</p>
    `,
    videoUrl: "portfolio-fishing.mp4" // ADD YOUR YOUTUBE EMBED URL HERE
  }
};
