// Skylanders dataset (converted from your TypeScript)
const skylanders = [
  { name: "Spyro", image : "photos/SpyrosAdventure/Spyro.webp", element: "Magic", game: "Spyro's Adventure", type: "Core"},
  { name: "Eon's Elite Spyro", image : "photos/Trap Team/EliteSpyro.webp", element: "Magic", game: "Trap Team", type: "Eon's Elite" },
  { name: "Dark Spyro", image : "photos/SpyrosAdventure/DarkSpyro.jpg", element: "Magic", game: "Spyro's Adventure", type: "Dark" },
  { name: "Legendary Spyro", image : "photos/SpyrosAdventure/LegendSpyro.webp", element: "Magic", game: "Spyro's Adventure", type: "Legendary"},
  { name: "Spyro (Series 2)", image : "photos/Giants/Spyro2.webp", element: "Magic", game: "Giants", type: "Core", exclusivity: "None" },
  { name: "Mega Ram Spyro <br> (Series 3)", image : "photos/SwapForce/Spyro3.webp", element: "Magic", game: "Swap Force", type: "Core" },
  { name: "Mega Ram Dark Spyro (Series 3)", image : "photos/SwapForce/DarkSpyro3.webp", element: "Magic", game: "Swap Force", type: "Dark"},
  { name: "Spry", image : "photos/Trap Team/Spry.jpg", element: "Magic", game: "Trap Team", type: "Mini", exclusivity: "None" },
  { name: "Gill Grunt", image : "photos/SpyrosAdventure/GillGrunt.webp", element: "Water", game: "Spyro's Adventure", type: "Core" },
  { name: "Eon's Elite Gill Grunt", image : "photos/Trap Team/EliteGillGrunt.webp", element: "Water", game: "Trap Team", type: "Eon's Elite" },
  { name: "Gill Grunt (Series 2)", image : "photos/Giants/GillGrunt2.webp", element: "Water", game: "Giants", type: "Core", exclusivity: "None" },
  { name: "Anchors Away Gill Grunt (Series 3)", image : "photos/SwapForce/GillGrunt3.webp", element: "Water", game: "Swap Force", type: "Core" },
  { name: "Tidal Wave Gill Grunt (Series 4)", image : "photos/Trap Team/GillGrunt4.webp", element: "Water", game: "Trap Team", type: "Core" },
  { name: "Gill Runt", image : "photos/SpyrosAdventure/GillRunt.webp", element: "Water", game: "Spyro's Adventure", type: "Mini" },
  { name: "Deep Dive Gill Grunt", image : "photos/Superchargers/DeepGillGrunt.webp", element: "Water", game: "SuperChargers", type: "SuperCharger" },
  { name: "Trigger Happy", image : "photos/SpyrosAdventure/TriggerHappy.jpg", element: "Tech", game: "Spyro's Adventure", type: "Core" },
  { name: "Legendary Trigger Happy", image : "photos/SpyrosAdventure/LegendTriggerHappy.webp", element: "Tech", game: "Spyro's Adventure", type: "Legendary" },
  { name: "Eon's Elite Trigger Happy", image : "photos/Trap Team/EliteTriggerHappy.webp", element: "Tech", game: "Trap Team", type: "Eon's Elite" },
  { name: "Trigger Happy (Series 2)", image : "photos/Giants/TriggerHappy2.webp", element: "Tech", game: "Giants", type: "Core" },
  { name: "Big Bang Trigger Happy (Series 3)", image : "photos/SwapForce/TriggerHappy3.webp", element: "Tech", game: "Swap Force", type: "Core" },
  { name: "Springtime Big Bang Trigger Happy (Series 3)", image : "photos/SwapForce/SpringTriggerHappy.webp", element: "Tech", game: "Swap Force", type: "Core" },
  { name: "Trigger Snappy", image : "photos/SpyrosAdventure/TriggerSnappy.webp", element: "Tech", game: "Spyro's Adventure", type: "Mini" },
  { name: "Double Dare <br> Trigger Happy", image : "photos/Superchargers/DoubleTriggerHappy.webp", element: "Tech", game: "SuperChargers", type: "SuperCharger" },
  { name: "Stealth Elf", image : "photos/SpyrosAdventure/StealthElf.webp", element: "Life", game: "Spyro's Adventure", type: "Core" },
  { name: "Eon's Elite Stealth Elf", image : "photos/Trap Team/EliteStealthElf.webp", element: "Life", game: "Trap Team", type: "Eon's Elite" },
  { name: "Stealth Elf (Series 2)", image : "photos/Giants/StealthElf2.jpg", element: "Life", game: "Giants", type: "Core" },
  { name: "Legendary Stealth Elf (Series 2)", image : "photos/Giants/LegendStealthElf.webp", element: "Life", game: "Giants", type: "Legendary" },
  { name: "Ninja Stealth Elf <br> (Series 3)", image : "photos/SwapForce/StealthElf3.webp", element: "Life", game: "Swap Force", type: "Core" },
  { name: "Dark Stealth Elf", image : "photos/SwapForce/DarkStealthElf.webp", element: "Life", game: "Swap Force", type: "Dark" },
  { name: "Whisper Elf", image : "photos/SpyrosAdventure/WhisperElf.webp", element: "Life", game: "Spyro's Adventure", type: "Mini" },
  { name: "Super Shot Stealth Elf", image : "photos/Superchargers/SuperStealthElf.jpg", element: "Life", game: "SuperChargers", type: "SuperCharger" },
  { name: "Dark Super Shot <br> Stealth Elf", image : "photos/Superchargers/DarkSuperStealthElf.webp", element: "Life", game: "SuperChargers", type: "Dark" },
  { name: "Bash", image: "photos/SpyrosAdventure/Bash.webp", element: "Earth", game: "Spyro's Adventure", type: "Core" },
  { name: "Legendary Bash", image: "photos/SpyrosAdventure/LegendBash.jpg", element: "Earth", game: "Spyro's Adventure", type: "Legendary" },
  { name: "Birthday Bash", image: "photos/Lost Islands/BirthdayBash.webp", element: "Earth", game: "Lost Islands", type: "Core"},
  { name: "Bash (Series 2)", image: "photos/Giants/Bash2.webp", element: "Earth", game: "Giants", type: "Core" },
  { name: "Bop", image : "photos/Trap Team/Bop.webp", element: "Earth", game: "Trap Team", type: "Mini" },
  { name: "Eruptor", image: "photos/SpyrosAdventure/Eruptor.webp", element: "Fire", game: "Spyro's Adventure", type: "Core" },
  { name: "Eon's Elite Eruptor", image: "photos/Trap Team/EliteEruptor.webp", element: "Fire", game: "Trap Team", type: "Eon's Elite" },
  { name: "Eruptor (Series 2)", image: "photos/Giants/Eruptor2.webp", element: "Fire", game: "Giants", type: "Core" },
  { name: "Lightcore Eruptor <br> (Series 2)", image: "photos/Giants/LCEruptor.webp", element: "Fire", game: "Giants", type: "Lightcore" },
  { name: "Lava Barf Eruptor <br> (Series 3)", image: "photos/SwapForce/Eruptor3.webp", element: "Fire", game: "Swap Force", type: "Core" },
  { name: "Weeruptor", image : "photos/Trap Team/Weeruptor.webp", element: "Fire", game: "Trap Team", type: "Mini" },
  { name: "Eggsellent Weeruptor", image : "photos/Trap Team/EggsellentWeeruptor.webp", element: "Fire", game: "Trap Team", type: "Special Edition" },
  { name: "Lava Lance Eruptor", image: "photos/Superchargers/SuperEruptor.webp", element: "Fire", game: "SuperChargers", type: "SuperCharger" },
  { name: "Chop Chop", image : "photos/SpyrosAdventure/ChopChop.webp", element: "Undead", game: "Spyro's Adventure", type: "Core" },
  { name: "Legendary Chop Chop", image : "photos/SpyrosAdventure/LegendChopChop.jpg", element: "Undead", game: "Spyro's Adventure", type: "Legendary"},
  { name: "Eon's Elite Chop Chop", image: "photos/Trap Team/EliteChopChop.webp", element: "Undead", game: "Trap Team", type: "Eon's Elite" },
  { name: "Chop Chop (Series 2)", image: "photos/Giants/ChopChop2.jpg", element: "Undead", game: "Giants", type: "Core" },
  { name: "Twin Blade Chop Chop (Series 3)", image: "photos/SwapForce/ChopChop3.png", element: "Undead", game: "Swap Force", type: "Core" },
  { name: "Terrafin", image: "photos/SpyrosAdventure/Terrafin.webp", element: "Earth", game: "Spyro's Adventure", type: "Core" },
  { name: "Eon's Elite Terrafin", image: "photos/Trap Team/EliteTerrafin.webp", element: "Earth", game: "Trap Team", type: "Eon's Elite" },
  { name: "Terrafin (Series 2)", image: "photos/Giants/Terrafin2.webp", element: "Earth", game: "Giants", type: "Core" },
  { name: "Knockout Terrafin <br> (Series 3)", image: "photos/SwapForce/Terrafin3.webp", element: "Earth", game: "Swap Force", type: "Core" },
  { name: "Terrabite", image : "photos/SpyrosAdventure/Terrabite.webp", element: "Earth", game: "Spyro's Adventure", type: "Mini" },
  { name: "Shark Shooter Terrafin", image: "photos/Superchargers/SuperTerrafin.jpg", element: "Earth", game: "SuperChargers", type: "SuperCharger" },
  { name: "Lightning Rod", image : "photos/SpyrosAdventure/LightningRod.webp", element: "Air", game: "Spyro's Adventure", type: "Core" },
  { name: "Lightning Rod (Series 2)", image : "photos/Giants/LightningRod2.webp", element: "Air", game: "Giants", type: "Core" },
  { name: "Ignitor", image : "photos/SpyrosAdventure/Ignitor.webp", element: "Fire", game: "Spyro's Adventure", type: "Core" },
  { name: "Ignitor (Series 2)", image : "photos/Giants/Ignitor2.webp", element: "Fire", game: "Giants", type: "Core" },
  { name: "Legendary Ignitor <br> (Series 2)", image : "photos/Giants/LegendIgnitor.webp", element: "Fire", game: "Giants", type: "Legendary" },
  { name: "Cynder", image : "photos/SpyrosAdventure/Cynder.webp", element: "Undead", game: "Spyro's Adventure", type: "Core" },
  { name: "Cynder (Series 2)", image : "photos/Giants/Cynder2.webp", element: "Undead", game: "Giants", type: "Core" },
  { name: "Phantom Cynder <br> (Series 3)", image : "photos/SwapForce/Cynder3.webp", element: "Undead", game: "Swap Force", type: "Core" },
  { name: "Skeletal Cynder", image : "photos/Lost Islands/SkeletalCynder.webp", element: "Undead", game: "Lost Islands", type: "Dark" },
  { name: "Sonic Boom", image : "photos/SpyrosAdventure/SonicBoom.webp", element: "Air", game: "Spyro's Adventure", type: "Core" },
  { name: "Sonic Boom (Series 2)", image : "photos/Giants/SonicBoom2.webp", element: "Air", game: "Giants", type: "Core" },
  { name: "Flameslinger", image : "photos/SpyrosAdventure/Flameslinger.webp", element: "Fire", game: "Spyro's Adventure", type: "Core" },
  { name: "Flameslinger (Series 2)", image : "photos/Giants/Flameslinger2.webp", element: "Fire", game: "Giants", type: "Core" },
  { name: "Cupid Flameslinger", image : "photos/Lost Islands/CupidFlameslinger.webp", element: "Fire", game: "Lost Islands", type: "Special Edition" },
  { name: "Wrecking Ball", image : "photos/SpyrosAdventure/WreckingBall.jpg", element: "Magic", game: "Spyro's Adventure", type: "Core" },
  { name: "Wrecking Ball (Series 2)", image : "photos/Giants/WreckingBall2.webp", element: "Magic", game: "Giants", type: "Core" },
  { name: "Buddy Wrecking Ball", image : "photos/Lost Islands/BuddyWreckingBall.webp", element: "Magic", game: "Lost Islands", type: "Special Edition" },
  { name: "Voodood", image : "photos/SpyrosAdventure/Voodood.webp", element: "Magic", game: "Spyro's Adventure", type: "Core" },
  { name: "Eon's Elite Voodood", image : "photos/Superchargers/EliteVoodood.webp", element: "Magic", game: "SuperChargers", type: "Eon's Elite" },
  { name: "Prism Break", image : "photos/SpyrosAdventure/PrismBreak.jpg", element: "Earth", game: "Spyro's Adventure", type: "Core" },
  { name: "Prism Break (Series 2)", image : "photos/Giants/PrismBreak2.webp", element: "Earth", game: "Giants", type: "Core" },
  { name: "Lightcore Prism Break", image : "photos/Giants/LCPrismBreak.webp", element: "Earth", game: "Giants", type: "Lightcore" },
  { name: "Hyper Beam Prism Break (Series 3)", image : "photos/SwapForce/PrismBreak3.webp", element: "Earth", game: "Swap Force", type: "Core" },
  { name: "Zap", image : "photos/SpyrosAdventure/Zap.webp", element: "Water", game: "Spyro's Adventure", type: "Core" },
  { name: "Zap (Series 2)", image : "photos/Giants/Zap2.webp", element: "Water", game: "Giants", type: "Core" },
  { name: "Drobot", image : "photos/SpyrosAdventure/Drobot.webp", element: "Tech", game: "Spyro's Adventure", type: "Core" },
  { name: "Drobot (Series 2)", image : "photos/Giants/Drobot2.webp", element: "Tech", game: "Giants", type: "Core" },
  { name: "Lightcore Drobot <br> (Series 2)", image : "photos/Giants/LCDrobot.webp", element: "Tech", game: "Giants", type: "Lightcore" },
  { name: "Drobit", image : "photos/Trap Team/Drobit.webp", element: "Tech", game: "Trap Team", type: "Mini" },
  { name: "Stump Smash", image : "photos/SpyrosAdventure/StumpSmash.webp", element: "Life", game: "Spyro's Adventure", type: "Core" },
  { name: "Stump Smash (Series 2)", image : "photos/Giants/StumpSmash2.webp", element: "Life", game: "Giants", type: "Core" },
  { name: "Hex", image : "photos/SpyrosAdventure/Hex.webp", element: "Undead", game: "Spyro's Adventure", type: "Core" },
  { name: "Hex (Series 2)", image : "photos/Giants/Hex2.webp", element: "Undead", game: "Giants", type: "Core" },
  { name: "Hallow's Eve Hex", image : "photos/Lost Islands/HallowsEveHex.webp", element: "Undead", game: "Lost Islands", type: "Special Edition" },
  { name: "Lightcore Hex", image : "photos/Giants/LCHex.webp", element: "Undead", game: "Giants", type: "Lightcore" },
  { name: "Hijinx", image : "photos/Trap Team/Hijinx.webp", element: "Undead", game: "Trap Team", type: "Mini" },
  { name: "Dino-Rang", image : "photos/SpyrosAdventure/DinoRang.webp", element: "Earth", game: "Spyro's Adventure", type: "Core" },
  { name: "Eon's Elite Dino-Rang", image : "photos/Superchargers/EliteDinoRang.webp", element: "Earth", game: "SuperChargers", type: "Eon's Elite" },
  { name: "Whirlwind", image : "photos/SpyrosAdventure/Whirlwind.webp", element: "Air", game: "Spyro's Adventure", type: "Core" },
  { name: "Eon's Elite Whirlwind", image : "photos/Trap Team/EliteWhirlwind.webp", element: "Air", game: "Trap Team", type: "Eon's Elite" },
  { name: "Whirlwind (Series 2)", image : "photos/Giants/Whirlwind2.webp", element: "Air", game: "Giants", type: "Core" },
  { name: "Polar Whirlwind (Series 2)", image : "photos/Giants/PolarWhirlwind.webp", element: "Air", game: "Giants", type: "Core" },
  { name: "Horn Blast Whirlwind (Series 3)", image : "photos/SwapForce/Whirlwind3.webp", element: "Air", game: "Swap Force", type: "Core" },
  { name: "Breeze", image : "photos/Trap Team/Breeze.jpg", element: "Air", game: "Trap Team", type: "Mini" },
  { name: "Double Trouble", image : "photos/SpyrosAdventure/DoubleTrouble.webp", element: "Magic", game: "Spyro's Adventure", type: "Core" },
  { name: "Double Trouble (Series 2)", image : "photos/Giants/DoubleTrouble2.webp", element: "Magic", game: "Giants", type: "Core" },
  { name: "Royal Double Trouble (Series 2)", image : "photos/Giants/RoyalDoubleTrouble.webp", element: "Magic", game: "Giants", type: "Special Edition" },
  { name: "Slam Bam", image : "photos/SpyrosAdventure/SlamBam.webp", element: "Water", game: "Spyro's Adventure", type: "Core" },
  { name: "Surfer Slam Bam", image : "photos/Lost Islands/SummerSlamBam.webp", element: "Water", game: "Lost Islands", type: "Special Edition" },
  { name: "Slam Bam (Series 2)", image : "photos/Giants/SlamBam2.webp", element: "Water", game: "Giants", type: "Core" },
  { name: "Legendary Slam Bam (Series 2)", image : "photos/Giants/LegendSlamBam.webp", element: "Water", game: "Legendary", type: "Legendary"},
  { name: "Eon's Elite Slam Bam (Series 2)", image : "photos/Superchargers/EliteSlamBam.webp", element: "Water", game: "SuperChargers", type: "Eon's Elite" },
  { name: "Boomer", image : "photos/SpyrosAdventure/Boomer.webp", element: "Tech", game: "Spyro's Adventure", type: "Core" },
  { name: "Lucky Boomer", image : "photos/Lost Islands/LuckyBoomer.webp", element: "Tech", game: "Lost Islands", type: "Special Edition" },
  { name: "Eon's Elite Boomer", image : "photos/Superchargers/EliteBoomer.webp", element: "Tech", game: "SuperChargers", type: "Eon's Elite" },
  { name: "Zook", image : "photos/SpyrosAdventure/Zook.webp", element: "Life", game: "Spyro's Adventure", type: "Core" },
  { name: "Eon's Elite Zook", image : "photos/Superchargers/EliteZook.webp", element: "Life", game: "SuperChargers", type: "Eon's Elite" },
  { name: "Zook (Series 2)", image : "photos/Giants/Zook2.webp", element: "Life", game: "Giants", type: "Core" },
  { name: "Fireworks Zook", image : "photos/Lost Islands/FireworksZook.webp", element: "Life", game: "Lost Islands", type: "Special Edition" },
  { name: "Ghost Roaster", image : "photos/SpyrosAdventure/GhostRoaster.webp", element: "Undead", game: "Spyro's Adventure", type: "Core" },
  { name: "Eon's Elite Ghost Roaster", image : "photos/Superchargers/EliteGhostRoaster.webp", element: "Undead", game: "SuperChargers", type: "Eon's Elite" },
  { name: "Camo", image : "photos/SpyrosAdventure/Camo.webp", element: "Life", game: "Spyro's Adventure", type: "Core" },
  { name: "Thorn Horn Camo <br> (Series 2)", image : "photos/SwapForce/Camo2.webp", element: "Life", game: "Trap Team", type: "Special Edition" },
  { name: "Warnado", image : "photos/SpyrosAdventure/Warnado.webp", element: "Air", game: "Spyro's Adventure", type: "Core" },
  { name: "Lightcore Warnado", image : "photos/SwapForce/LCWarnado.webp", element: "Air", game: "Swap Force", type: "Lightcore" },
  { name: "Drill Sergeant", image : "photos/SpyrosAdventure/DrillSergeant.webp", element: "Tech", game: "Spyro's Adventure", type: "Core" },
  { name: "Drill Sergeant (Series 2)", image : "photos/Giants/DrillSergeant2.webp", element: "Tech", game: "Giants", type: "Core" },
  { name: "Sunburn", image : "photos/SpyrosAdventure/Sunburn.webp", element: "Fire", game: "Spyro's Adventure", type: "Core" },
  { name: "Wham-Shell",image : "photos/SpyrosAdventure/WhamShell.webp", element: "Water", game: "Spyro's Adventure", type: "Core" },
  { name: "Lightcore Wham-Shell", image : "photos/SwapForce/LCWhamShell.webp", element: "Water", game: "Swap Force", type: "Lightcore" },

  // Giants (2012) - 16 New Core + 8 Giants
  { name: "Tree Rex", image : "photos/Giants/TreeRex.webp", element: "Life", game: "Giants", type: "Giant" },
  { name: "Gnarly Tree Rex", image : "photos/Giants/GnarlyTreeRex.webp", element: "Life", game: "Giants", type: "Mini" },
  { name: "Barkley", image : "photos/Giants/Barkley.webp", element: "Life", game: "Giants", type: "Mini" },
  { name: "Gnarly Barkley",  image : "photos/Trap Team/GnarlyBarkley.webp", element: "Life", game: "Trap Team", type: "Mini" },
  { name: "Bouncer", image : "photos/Giants/Bouncer.webp", element: "Tech", game: "Giants", type: "Giant" },
  { name: "Legendary Bouncer", image : "photos/Giants/LegendBouncer.webp", element: "Tech", game: "Giants", type: "Legendary" },
  { name: "Crusher", image : "photos/Giants/Crusher.webp", element: "Earth", game: "Giants", type: "Giant" },
  { name: "Granite Crusher", image : "photos/Giants/GraniteCrusher.webp", element: "Earth", game: "Giants", type: "Mini" },
  { name: "Hot Head", image : "photos/Giants/HotHead.webp", element: "Fire", game: "Giants", type: "Giant" },
  { name: "Eye-Brawl", image : "photos/Giants/EyeBrawl.webp", element: "Undead", game: "Giants", type: "Giant" },
  { name: "Eye-Small", image : "photos/Giants/EyeSmall.webp", element: "Undead", game: "Giants", type: "Mini" },
  { name: "Ninjini", image : "photos/Giants/Ninjini.webp", element: "Magic", game: "Giants", type: "Giant" },
  { name: "Scarlett Ninjini", image : "photos/Giants/ScarletNinjini.webp", element: "Magic", game: "Giants", type: "Mini" },
  { name: "Mini-Jini", image : "photos/Giants/MiniJini.webp", element: "Magic", game: "Giants", type: "Mini" },
  { name: "Swarm", image : "photos/Giants/Swarm.webp", element: "Air", game: "Giants", type: "Giant" },
  { name: "Thumpback", image : "photos/Giants/Thumpback.jpg", element: "Water", game: "Giants", type: "Giant" },
  { name: "Admiral Thumpback", image : "photos/Lost Islands/AdmiralThumpback.webp", element: "Water", game: "Lost Islands", type: "Giant" },
  { name: "Thumpling", image : "photos/Giants/Thumpling.webp", element: "Water", game: "Giants", type: "Mini" },
  { name: "Jet-Vac", image : "photos/Giants/JetVac.jpg", element: "Air", game: "Giants", type: "Core" },
  { name: "Legendary Jet-Vac", image : "photos/Giants/LegendJetVac.webp", element: "Air", game: "Giants", type: "Legendary" },
  { name: "Lightcore Jet-Vac", image : "photos/Giants/LCJetVac.webp", element: "Air", game: "Giants", type: "Lightcore" },
  { name: "Turbo Jet-Vac (Series 2)", image : "photos/SwapForce/JetVac2.webp", element: "Air", game: "Swap Force", type: "Core" },
  { name: "Full Blast Jet-Vac <br> (Series 3)", image : "photos/Trap Team/JetVac3.webp", element: "Air", game: "Trap Team", type: "Core" },  
  { name: "Pet Vac", image : "photos/Trap Team/PetVac.webp", element: "Air", game: "Trap Team", type: "Mini" },
  { name: "Power Punch Pet Vac", image : "photos/Trap Team/PowerPunchPetVac.webp", element: "Air", game: "Trap Team", type: "Mini" },
  { name: "Hurricane Jet-Vac", image : "photos/SuperChargers/HurricaneJetVac.webp", element: "Air", game: "SuperChargers", type: "SuperCharger" },
  { name: "Legendary Hurricane <br> Jet-Vac", image : "photos/SuperChargers/LegendHurricanJetVac.webp", element: "Air", game: "SuperChargers", type: "Legendary" },
  { name: "Chill", image : "photos/Giants/Chill.webp", element: "Water", game: "Giants", type: "Core" },
  { name: "Lightcore Chill", image : "photos/Giants/LCChill.webp", element: "Water", game: "Giants", type: "Lightcore" },
  { name: "Legendary Chill", image : "photos/Giants/LegendChill.webp", element: "Water", game: "Giants", type: "Legendary" },
  { name: "Blizzard Chill (Series 2)", image : "photos/SwapForce/Chill2.webp", element: "Water", game: "Swap Force", type: "Special Edition" },
  { name: "Pop Fizz", image : "photos/Giants/PopFizz.webp", element: "Magic", game: "Giants", type: "Core" },
  { name: "Punch Pop Fizz", image : "photos/Giants/PunchPopFizz.webp", element: "Magic", game: "Giants", type: "Core" },
  { name: "Hoppity Pop Fizz", image : "photos/Lost Islands/HoppityPopFizz.webp", element: "Magic", game: "Lost Islands", type: "Special Edition" },
  { name: "Lightcore Pop Fizz", image : "photos/Giants/LCPopFizz.webp", element: "Magic", game: "Giants", type: "Lightcore" },
  { name: "Super Gulp Pop Fizz (Series 2)", image : "photos/SwapForce/PopFizz2.webp", element: "Magic", game: "Swap Force", type: "Core" },
  { name: "Fizzy Frenzy Pop Fizz (Series 3)", image : "photos/Trap Team/PopFizz3.webp", element: "Magic", game: "Trap Team", type: "Core" },
  { name: "Love Potion Pop Fizz", image : "photos/Trap Team/LovePunchPopFizz.webp", element: "Magic", game: "Trap Team", type: "Special Edition" },
  { name: "Big Bubble Pop Fizz", image : "photos/Superchargers/SuperPopFizz.webp", element: "Magic", game: "SuperChargers", type: "SuperCharger" },
  { name: "Birthday Bash Big Bubble Pop Fizz", image : "photos/Superchargers/BdayPopFizz.webp", element: "Magic", game: "SuperChargers", type: "Special Edition" },
  { name: "Fright Rider", image : "photos/Giants/FrightRider.webp", element: "Undead", game: "Giants", type: "Core" },
  { name: "Sprocket", image : "photos/Giants/Sprocket.jpg", element: "Tech", game: "Giants", type: "Core" },
  { name: "Heavy Duty Sprocket (Series 2)", image : "photos/SwapForce/Sprocket2.webp", element: "Tech", game: "Swap Force", type: "Core" },
  { name: "Flashwing", image : "photos/Giants/Flashwing.webp", element: "Earth", game: "Giants", type: "Core" },
  { name: "Jade Flashwing", image : "photos/Giants/JadeFlashwing.webp", element: "Earth", game: "Giants", type: "Core" },
  { name: "Lightcore Flashwing", image : "photos/SwapForce/LCFlashwing.webp", element: "Earth", game: "Swap Force", type: "Lightcore" },
  { name: "Shroomboom", image : "photos/Giants/Shroomboom.webp", element: "Life", game: "Giants", type: "Core" },
  { name: "Lightcore Shroomboom", image : "photos/Giants/LCShroomboom.webp", element: "Life", game: "Giants", type: "Lightcore" },
  { name: "Sure Shot Shrromboom (Series 2)", image : "photos/SwapForce/Shroomboom2.webp", element: "Life", game: "Swap Force", type: "Core" },  
  { name: "Hot Dog", image : "photos/Giants/HotDog.webp", element: "Fire", game: "Giants", type: "Core" },
  { name: "Molten Hot Dog", image : "photos/Giants/MoltenHotDog.webp", element: "Fire", game: "Giants", type: "Core" },
  { name: "Fire Bone Hot Dog (Series 2)", image : "photos/SwapForce/HotDog2.webp", element: "Fire", game: "Swap Force", type: "Core" },
  
  // Swap Force (2013) - 16 Swap Force + Cores
  { name: "Wash Buckler", image : "photos/SwapForce/WashBuckler.webp", element: "Water", game: "Swap Force", type: "Swap Force" },
  { name: "Dark Wash Buckler", image : "photos/SwapForce/DarkWashBuckler.webp", element: "Water", game: "Swap Force", type: "Dark" },
  { name: "Holiday Wash Buckler", image : "photos/Lost Islands/HolidayWashBuckler.webp", element: "Water", game: "Lost Islands", type: "Special Edition" },
  { name: "Blast Zone", image : "photos/SwapForce/BlastZone.webp", element: "Fire", game: "Swap Force", type: "Swap Force" },
  { name: "Dark Blast Zone",  image : "photos/SwapForce/DarkBlastZone.webp", element: "Fire", game: "Swap Force", type: "Dark" },
  { name: "Magna Charge", image : "photos/SwapForce/MagnaCharge.webp", element: "Tech", game: "Swap Force", type: "Swap Force" },
  { name: "Nitro Magna Charge", image : "photos/SwapForce/NitroMagnaCharge.webp", element: "Tech", game: "Swap Force", type: "Nitro" },
  { name: "Rattle Shake", image : "photos/SwapForce/RattleShake.webp", element: "Undead", game: "Swap Force", type: "Swap Force" },
  { name: "Quickdraw Rattle Shake", image : "photos/SwapForce/QuickdrawRattleShake.webp", element: "Undead", game: "Swap Force", type: "Special Edition" },
  { name: "Free Ranger", image : "photos/SwapForce/FreeRanger.webp", element: "Air", game: "Swap Force", type: "Swap Force" },
  { name: "Legendary Free Ranger", image : "photos/SwapForce/LegendFreeRanger.webp", element: "Air", game: "Swap Force", type: "Legendary" },
  { name: "Rubble Rouser", image : "photos/SwapForce/RubbleRouser.webp", element: "Earth", game: "Swap Force", type: "Swap Force" },
  { name: "Stink Bomb", image : "photos/SwapForce/StinkBomb.webp", element: "Life", game: "Swap Force", type: "Swap Force" },
  { name: "Hoot Loop", image : "photos/SwapForce/HootLoop.webp", element: "Magic", game: "Swap Force", type: "Swap Force" },
  { name: "Enchanted Hoot Loop", image : "photos/SwapForce/EnchantedHootLoop.webp", element: "Magic", game: "Swap Force", type: "Special Edition" },
  { name: "Spy Rise", image : "photos/SwapForce/SpyRise.webp", element: "Tech", game: "Swap Force", type: "Swap Force" },
  { name: "Night Shift", image : "photos/SwapForce/NightShift.webp", element: "Undead", game: "Swap Force", type: "Swap Force" },
  { name: "Legendary Night Shift", image : "photos/SwapForce/LegendNightShift.webp", element: "Undead", game: "Swap Force", type: "Legendary" },
  { name: "Boom Jet", image : "photos/SwapForce/BoomJet.webp", element: "Air", game: "Swap Force", type: "Swap Force" },
  { name: "Fire Kraken", image : "photos/SwapForce/FireKraken.webp", element: "Fire", game: "Swap Force", type: "Swap Force" },
  { name: "Jade Fire Kraken", image : "photos/SwapForce/JadeFireKraken.webp", element: "Fire", game: "Swap Force", type: "Special Edition" },
  { name: "Grilla Drilla", image : "photos/SwapForce/GrillaDrilla.webp", element: "Life", game: "Swap Force", type: "Swap Force" },
  { name: "Construction Grilla Drilla", image : "photos/Lost Islands/BuildGrillaDrilla.webp", element: "Life", game: "Lost Islands", type: "Special Edition" },
  { name: "Doom Stone", image : "photos/SwapForce/DoomStone.webp", element: "Earth", game: "Swap Force", type: "Swap Force" },
  { name: "Freeze Blade", image : "photos/SwapForce/FreezeBlade.webp", element: "Water", game: "Swap Force", type: "Swap Force" },
  { name: "Nitro Freeze Blade", image : "photos/SwapForce/NitroFreezeBlade.webp", element: "Water", game: "Swap Force", type: "Dark" },
  { name: "Trap Shadow", image : "photos/SwapForce/TrapShadow.webp", element: "Magic", game: "Swap Force", type: "Swap Force" },
  { name: "Countdown", image : "photos/SwapForce/Countdown.webp", element: "Tech", game: "Swap Force", type: "Core" },
  { name: "Kickoff Countdown", image : "photos/SwapForce/KickoffCountdown.webp", element: "Tech", game: "Swap Force", type: "Special Edition" },
  { name: "Lightcore Countdown", image : "photos/SwapForce/LCCountdown.webp", element: "Tech", game: "Swap Force", type: "Lightcore" },
  { name: "New Year's Countdown", image : "photos/Lost Islands/NewyearCountdown.webp", element: "Tech", game: "Lost Islands", type: "Special Edition" },
  { name: "Bumble Blast", image : "photos/SwapForce/BumbleBlast.webp", element: "Life", game: "Swap Force", type: "Core" },
  { name: "Jolly Bumble Blast", image : "photos/SwapForce/JollyBumbleBlast.jpg", element: "Life", game: "Swap Force", type: "Special Edition" },
  { name: "Lightcore Bumble Blast", image : "photos/SwapForce/LCBumbleBlast.webp", element: "Life", game: "Swap Force", type: "Lightcore" },
  { name: "Zoo Lou", image : "photos/SwapForce/ZooLou.webp", element: "Life", game: "Swap Force", type: "Core" },
  { name: "Legendary Zoo Lou", image : "photos/SwapForce/LegendZooLou.webp", element: "Life", game: "Swap Force", type: "Legendary"},
  { name: "Scorp", image : "photos/SwapForce/Scorp.webp", element: "Earth", game: "Swap Force", type: "Core" },
  { name: "Grim Creeper", image : "photos/SwapForce/GrimCreeper.jpg", element: "Undead", game: "Swap Force", type: "Core" },
  { name: "Legendary Grim Creeper", image : "photos/SwapForce/LegendGrimCreeper.webp", element: "Undead", game: "Swap Force", type: "Legendary" },
  { name: "Lightcore Grim Creeper", image : "photos/SwapForce/LCGrimCreeper.webp", element: "Undead", game: "Swap Force", type: "Lightcore" },
  { name: "Rip Tide", image : "photos/SwapForce/RipTide.webp", element: "Water", game: "Swap Force", type: "Core" },
  { name: "Punk Shock", image : "photos/SwapForce/Punkshock.webp", element: "Water", game: "Swap Force", type: "Core" },
  { name: "Roller Brawl", image : "photos/SwapForce/RollerBrawl.webp", element: "Undead", game: "Swap Force", type: "Core" },
  { name: "Snowler Roller Brawl", image : "photos/Lost Islands/SnowlerRollerBrawl.webp", element: "Undead", game: "Lost Islands", type: "Special Edition" },
  { name: "Bone Bash Roller Brawl", image : "photos/Superchargers/SuperRollerBrawl.webp", element: "Undead", game: "SuperChargers", type: "SuperCharger" },
  { name: "Legendary Bone Bash Roller Brawl", image : "photos/Superchargers/LegendSuperRollerBrawl.webp", element: "Undead", game: "SuperChargers", type: "Legendary"},
  { name: "Smolderdash", image : "photos/SwapForce/Smolderdash.webp", element: "Fire", game: "Swap Force", type: "Core" },
  { name: "Lightcore Smolderdash", image : "photos/SwapForce/LCSmolderdash.webp", element: "Fire", game: "Swap Force", type: "Lightcore" },
  { name: "Star Strike", image : "photos/SwapForce/StarStrike.webp", element: "Magic", game: "Swap Force", type: "Core" },
  { name: "Enchanted Star Strike", image : "photos/SwapForce/EnchantedStarStrike.jpg", element: "Magic", game: "Swap Force", type: "Special Edition" },
  { name: "Lightcore Star Strike", image : "photos/SwapForce/LCStarStrike.webp", element: "Magic", game: "Swap Force", type: "Lightcore" },
  { name: "Scratch", image : "photos/SwapForce/Scratch.webp", element: "Magic", game: "Swap Force", type: "Core" },
  { name: "Fryno", image : "photos/SwapForce/Fryno.webp", element: "Fire", game: "Swap Force", type: "Core" },
  { name: "Hog Wild Fryno (Series 2)", image : "photos/Trap Team/Fryno2.webp", element: "Fire", game: "Trap Team", type: "Core" },
  { name: "Small Fry", image : "photos/Trap Team/SmallFry.webp", element: "Fire", game: "Trap Team", type: "Mini" },
  { name: "Wind-Up", image : "photos/SwapForce/WindUp.webp", element: "Tech", game: "Swap Force", type: "Core" },
  { name: "Slobber Tooth", image : "photos/SwapForce/SlobberTooth.webp", element: "Earth", game: "Swap Force", type: "Core" },
  { name: "Dark Slobber Tooth", image : "photos/SwapForce/DarkSlobberTooth.webp", element: "Earth", game: "Swap Force", type: "Dark" },
  { name: "Sundae Slobber Tooth", image : "photos/Lost Islands/SundaeSlobberTooth.webp", element: "Earth", game: "Lost Islands", type: "Special Edition" },
  
  // Trap Team (2014) - Trap Masters + Cores + Minis
  { name: "Snap Shot", element: "Water", game: "Trap Team", type: "Trap Master" },
  { name: "Dark Snap Shot", element: "Water", game: "Trap Team", type: "Dark" },
  { name: "Merry Snap Shot", element: "Water", game: "Lost Islands", type: "Special Edition" },
  { name: "Wallop", element: "Earth", game: "Trap Team", type: "Trap Master" },
  { name: "Head Rush", element: "Air", game: "Trap Team", type: "Trap Master" },
  { name: "Nitro Head Rush", element: "Air", game: "Trap Team", type: "Nitro" },
  { name: "Krypt King", element: "Undead", game: "Trap Team", type: "Trap Master" },
  { name: "Nitro Krypt King", element: "Undead", game: "Trap Team", type: "Nitro" },
  { name: "Wildfire", element: "Fire", game: "Trap Team", type: "Trap Master" },
  { name: "Dark Wildfire", element: "Fire", game: "Trap Team", type: "Dark" },
  { name: "Ka-Boom", element: "Fire", game: "Trap Team", type: "Trap Master" },
  { name: "Jawbreaker", element: "Earth", game: "Trap Team", type: "Trap Master" },
  { name: "Legendary Jawbreaker", element: "Earth", game: "Trap Team", type: "Legendary" },
  { name: "Blades", element: "Air", game: "Trap Team", type: "Trap Master" },
  { name: "Legendary Blades", element: "Air", game: "Trap Team", type: "Legendary" },
  { name: "Torch", element: "Fire", game: "Trap Team", type: "Trap Master" },
  { name: "Lob-Star", element: "Water", game: "Trap Team", type: "Trap Master" },
  { name: "Winterfest Lob-Star", element: "Water", game: "Trap Team", type: "Special Edition" },
  { name: "Knight Mare", element: "Dark", game: "Trap Team", type: "Trap Master" },
  { name: "Knight Light", element: "Light", game: "Trap Team", type: "Trap Master" },
  { name: "Bushwhack", element: "Life", game: "Trap Team", type: "Trap Master" },
  { name: "Legendary Bushwhack", element: "Life", game: "Trap Team", type: "Legendary" },
  { name: "Gearshift", element: "Tech", game: "Trap Team", type: "Trap Master" },
  { name: "Spotlight", element: "Light", game: "Trap Team", type: "Trap Master" },
  { name: "Blackout", element: "Dark", game: "Trap Team", type: "Trap Master" },
  { name: "Short Cut", element: "Magic", game: "Trap Team", type: "Trap Master" },
  { name: "Tuff Luck", element: "Magic", game: "Trap Team", type: "Trap Master" },
  { name : "Enigma", element : "Magic", game : "Trap Team", type : "Trap Master"},
  { name: "Gusto", element: "Air", game: "Trap Team", type: "Trap Master" },
  { name: "Thunderbolt", element: "Air", game: "Trap Team", type: "Trap Master" },

  // Trap Team - Core Characters
  { name: "Gusto", element: "Air", game: "Trap Team", type: "Trap Master" },
  { name: "Thunderbolt", element: "Air", game: "Trap Team", type: "Trap Master" },
  { name: "Fling Kong", element: "Air", game: "Trap Team", type: "Core" },
  { name: "Flip Wreck", element: "Water", game: "Trap Team", type: "Core" },
  { name: "Echo", element: "Water", game: "Trap Team", type: "Core" },
  { name: "Blastermind", element: "Magic", game: "Trap Team", type: "Core" },
  { name: "Funny Bone", element: "Undead", game: "Trap Team", type: "Core" },
  { name: "Fortune Funny Bone", element: "Undead", game: "Lost Islands", type: "Special Edition" },
  { name: "Bat Spin", element: "Undead", game: "Trap Team", type: "Core" },
  { name: "Chopper", element: "Tech", game: "Trap Team", type: "Core" },
  { name: "Tread Head", element: "Tech", game: "Trap Team", type: "Core" },
  { name: "Cobra Cadabra", element: "Magic", game: "Trap Team", type: "Core" },
  { name: "Charming Cobra Cadabra", element: "Magic", game: "Lost Islands", type: "Special Edition" },
  { name: "Rocky Roll", element: "Earth", game: "Trap Team", type: "Core" },
  { name: "Rocky Egg Roll", element: "Earth", game: "Lost Islands", type: "Special Edition" },
  { name: "Trail Blazer", element: "Fire", game: "Trap Team", type: "Core" },
  { name: "Food Fight", element: "Life", game: "Trap Team", type: "Core" },
  { name: "Dark Food Fight", element: "Life", game: "Trap Team", type: "Dark" },
  { name: "High Five", element: "Life", game: "Trap Team", type: "Core" },
  

  // SuperChargers (2015) - 20 SuperChargers + Variants
  { name: "Spitfire", element: "Fire", game: "SuperChargers", type: "SuperCharger" },
  { name: "Dark Spitfire", element: "Fire", game: "SuperChargers", type: "Dark" },
  { name: "Dive-Clops", element: "Water", game: "SuperChargers", type: "SuperCharger" },
  { name: "Missile-Tow Dive-Clops", element: "Water", game: "SuperChargers", type: "Special Edition" },
  { name: "Fiesta", element: "Undead", game: "SuperChargers", type: "SuperCharger" },
  { name: "Frightful Fiesta", element: "Undead", game: "SuperChargers", type: "Special Edition" },
  { name: "Splat", element: "Magic", game: "SuperChargers", type: "SuperCharger" },
  { name: "Stormblade", element: "Air", game: "SuperChargers", type: "SuperCharger" },
  { name: "Smash Hit", element: "Earth", game: "SuperChargers", type: "SuperCharger" },
  { name: "Thrillipede", element: "Life", game: "SuperChargers", type: "SuperCharger" },
  { name: "Eggciting Thrillipede", element: "Life", game: "SuperChargers", type: "Special Edition" },
  { name: "Nightfall", element: "Dark", game: "SuperChargers", type: "SuperCharger" },
  { name: "Astroblast", element: "Light", game: "SuperChargers", type: "SuperCharger" },
  { name: "Legendary Astroblast", element: "Light", game: "SuperChargers", type: "Legendary" },
  { name: "High Volt", element: "Tech", game: "SuperChargers", type: "SuperCharger" },
  { name: "Turbo Charge Donkey Kong", element: "Tech", game: "SuperChargers", type: "SuperCharger" },
  { name: "Dark Turbo Charge Donkey Kong", element: "Tech", game: "SuperChargers", type: "Dark" },
  { name: "Hammer Slam Bowser", element: "Fire", game: "SuperChargers", type: "SuperCharger" },
  { name: "Dark Hammer Slam Bowser", element: "Fire", game: "SuperChargers", type: "Dark" },
  
  // SuperChargers - Dark Edition
  { name: "Dark Hot Streak", element: "Fire", game: "SuperChargers", type: "Dark" },
  { name: "Dark Clown Cruiser", element: "Magic", game: "SuperChargers", type: "Dark" },
  { name: "Legendary Astroblast", element: "Light", game: "SuperChargers", type: "Legendary" },
  

  { name: "Eon's Elite Zap", element: "Water", game: "Eon's Elite", type: "Eon's Elite" },

  // Imaginators (2016) - 31 Senseis + Variants
  { name: "King Pen", element: "Water", game: "Imaginators", type: "Sensei" },
  { name: "Dark King Pen", element: "Water", game: "Imaginators", type: "Dark" },
  { name: "Legendary King Pen", element: "Water", game: "Legendary", type: "Legendary" },
  { name: "Golden Queen", element: "Earth", game: "Imaginators", type: "Sensei" },
  { name: "Dark Golden Queen", element: "Earth", game: "Imaginators", type: "Dark" },
  { name: "Wolfgang", element: "Undead", game: "Imaginators", type: "Sensei" },
  { name: "Dark Wolfgang", element: "Undead", game: "Imaginators", type: "Dark" },
  { name: "Chopscotch", element: "Magic", game: "Imaginators", type: "Sensei" },
  { name: "Legendary Chopscotch", element: "Magic", game: "Imaginators", type: "Legendary" },
  { name: "Candy-Coated Chopscotch", element: "Magic", game: "Imaginators", type: "Special Edition" },
  { name: "Tae Kwon Crow", element: "Air", game: "Imaginators", type: "Sensei" },
  { name: "Dr. Krankcase", element: "Tech", game: "Imaginators", type: "Sensei" },
  { name: "Ember", element: "Fire", game: "Imaginators", type: "Sensei" },
  { name: "Ambush", element: "Life", game: "Imaginators", type: "Sensei" },
  { name: "Starcast", element: "Magic", game: "Imaginators", type: "Sensei" },
  { name: "Buckshot", element: "Earth", game: "Imaginators", type: "Sensei" },
  { name: "Heartbreaker Buckshot", element: "Earth", game: "Imaginators", type: "Special Edition" },
  { name: "Aurora", element: "Light", game: "Imaginators", type: "Sensei" },
  { name: "Solar Flare Aurora", element: "Light", game: "Imaginators", type: "Sensei" },
  { name: "Legendary Aurora", element: "Light", game: "Legendary", type: "Legendary"},
  { name: "Flare Wolf", element: "Fire", game: "Imaginators", type: "Sensei" },
  { name: "Hard-Boiled Flare Wolf", element: "Fire", game: "Imaginators", type: "Special Edition" },
  { name: "Pit Boss", element: "Undead", game: "Imaginators", type: "Sensei" },
  { name: "Legendary Pit Boss", element: "Undead", game: "Legendary", type: "Legendary"},
  { name: "Tri-Tip", element: "Earth", game: "Imaginators", type: "Sensei" },
  { name: "Legendary Tri-Tip", element: "Earth", game: "Imaginators", type: "Sensei" },
  { name: "Blaster-Tron", element: "Tech", game: "Imaginators", type: "Sensei" },
  { name: "Chain Reaction", element: "Tech", game: "Imaginators", type: "Sensei" },
  { name: "Barbella", element: "Earth", game: "Imaginators", type: "Sensei" },
  { name: "Pain-Yatta", element: "Magic", game: "Imaginators", type: "Sensei" },
  { name: "Mysticat", element: "Magic", game: "Imaginators", type: "Sensei" },
  { name: "Ro-Bow", element: "Tech", game: "Imaginators", type: "Sensei" },
  { name: "Air Strike", element: "Air", game: "Imaginators", type: "Sensei" },
  { name: "Egg Bomber Air Strike", element: "Air", game: "Imaginators", type: "Special Edition" },
  { name: "Bad Juju", element: "Undead", game: "Imaginators", type: "Sensei" },
  { name: "Wild Storm", element: "Air", game: "Imaginators", type: "Sensei" },
  { name: "Grave Clobber", element: "Undead", game: "Imaginators", type: "Sensei" },
  { name: "Hood Sickle", element: "Dark", game: "Imaginators", type: "Sensei" },
  { name: "Tidepool", element: "Water", game: "Imaginators", type: "Sensei" },
  { name: "Crash Bandicoot", element: "Life", game: "Imaginators", type: "Sensei" },
  { name: "Dr. Neo Cortex", element: "Tech", game: "Imaginators", type: "Sensei" },
  { name: "Boom Bloom", element: "Life", game: "Imaginators", type: "Sensei" },
  
  // Imaginators - Cursed Tiki Temple
  { name: "Cursed Tiki Temple Multi-Pack", element: "Magic", game: "Imaginators", type: "Special" },
  
  // Additional Missing Characters
  { name: "Deja Vu", element: "Magic", game: "Trap Team", type: "Core" },
  { name: "Legendary Deja Vu", element: "Magic", game: "Trap Team", type: "Legendary" },
  { name: "Chompy Mage", element: "Life", game: "Imaginators", type: "Sensei" },
  { name: "Jingle Bell Chompy Mage", element: "Life", game: "Imaginators", type: "Special Edition" },
  { name: "Ro-Bow", element: "Tech", game: "Imaginators", type: "Sensei" },
  // 👉 Paste **all the rest of your list here**, unchanged.
];

const listEl = document.getElementById("skylander-list");
const searchEl = document.getElementById("search");
const filterElement = document.getElementById("filter-element");
const filterGame = document.getElementById("filter-game");
const filterType = document.getElementById("filter-type");

// Populate filter dropdowns dynamically
function populateFilters() {
  const elements = new Set();
  const games = new Set();
  const types = new Set();

  skylanders.forEach(s => {
    elements.add(s.element);
    games.add(s.game);
    types.add(s.type);
  });

  for (const e of elements) {
    filterElement.innerHTML += `<option value="${e}">${e}</option>`;
  }
  for (const g of games) {
    filterGame.innerHTML += `<option value="${g}">${g}</option>`;
  }
  for (const t of types) {
    filterType.innerHTML += `<option value="${t}">${t}</option>`;
  }
}

populateFilters();

// Render list
function render() {
  const search = searchEl.value.toLowerCase();
  const selectedElement = filterElement.value;
  const selectedGame = filterGame.value;
  const selectedType = filterType.value;

  const filtered = skylanders.filter(s => {
    return (
      s.name.toLowerCase().includes(search) &&
      (selectedElement === "" || s.element === selectedElement) &&
      (selectedGame === "" || s.game === selectedGame) &&
      (selectedType === "" || s.type === selectedType)
    );
  });

listEl.innerHTML = filtered
  .map(
    s => `
      <div class="card">
        <div class="name">${s.name}</div>

        <img src="${s.image}" alt="${s.name}" class="skylander-img">

        <div class="tag">Element: ${s.element}</div>
        <div class="tag">Game: ${s.game}</div>
        <div class="tag">Type: ${s.type}</div>
      </div>
    `
  )
  .join("");

}

render();

searchEl.addEventListener("input", render);
filterElement.addEventListener("change", render);
filterGame.addEventListener("change", render);
filterType.addEventListener("change", render);