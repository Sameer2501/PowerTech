import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.jpeg';
import p4 from '../assets/p4.jpeg';
import h1 from '../assets/h1.jpeg';
import ht2 from '../assets/ht2.png';
import e1 from '../assets/e1.jpeg';
import er2 from '../assets/er2.png';
import c1 from '../assets/c1.jpeg';
import cp2 from '../assets/cp2.png';
import cp3 from '../assets/cp3.png';
import sdt from '../assets/sdt.jpeg';
import olu from '../assets/olu.jpeg';
import ipt from '../assets/ipt.jpeg';
import abc from '../assets/abc.png';
import oil from '../assets/oil.jpeg';
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.jpeg';
import newImg from '../assets/new.png';
export const products = [
  {
    id: 'voltage-stabilizers',
    title: 'Servo Voltage Stabilizer',
    image: p1,
    description: "We are a leading manufacturer, supplier, and exporter of a wide range of Servo Voltage Stabilizers and Automatic Voltage Stabilizers, designed for diverse electrical and electronic applications. Manufactured using high-grade copper wires, our products deliver optimal energy efficiency and superior durability.",
    subTypes: [
      {
        title: "Type: Oil Cooled Linear type",
        image: p3,
        images: [p3, slide1, slide2],
        description: "The Air-Cooled Voltage Stabilizers offer excellent heat dissipation without the need for liquid coolants. Designed perfectly for indoor setups and cleaner industrial environments with efficient air convection systems."
      },
      {
        title: "Type: Unbalanced",
        image: p1,
        description: "We are a leading manufacturer, supplier, and exporter of a wide range of Servo Voltage Stabilizers and Automatic Voltage Stabilizers, designed for diverse electrical and electronic applications. Manufactured using high-grade copper wires, our products deliver optimal energy efficiency and superior durability. It ensures fully balanced voltage across all phases."
      },
      {
        title: "Type: balanced",
        image: p2,
        description: "Our Unbalanced Servo Voltage Stabilizers are engineered to handle separate phases independently. Ideal for power environments where there are significant voltage imbalances, ensuring each phase receives targeted voltage correction."
      },

      {
        title: "Type: Oil Cooled ",
        image: p4,
        description: `Designed for heavy-duty single-phase systems, utilizing oil cooling to efficiently handle high loads.

Advantages
• High efficiency (up to 98%)
• Zero waveform distortion
• ±1% precise output regulation
• Durable industrial design

Applications
• Heavy machinery & industrial equipment
• Stabilizing critical medical devices
• Large commercial setups & rural areas`
      },
      {
        title: "Type : Oil Cooled Servo Voltage Stabilizer",
        image: newImg,
        description: `The Ultimate Power Guard for Your Home. Protect your expensive appliances with the Super Power Tech (SPT) Oil-Cooled Servo Stabilizer. 
        
• Efficient Oil Cooling: Uses high-grade oil to prevent overheating, ensuring long-lasting performance even under heavy load conditions.
• Smart Monitoring: Integrated digital meters allow real-time tracking of input and output voltage.`}],
    features: ["Available in air-cooled, dry-type, single-phase, and three-phase systems",
      "Advanced mechanical and electrical engineering processes",
      "Suitable for all types of power factor loads ensuring minimal losses",
      "Supports natural air cooling, forced air cooling, and oil cooling",
      "Delivers superior performance, durability, and efficiency"
    ],
    keyBenefits: [
      { id: 1, title: 'Superior Performance', desc: 'Built to deliver maximum efficiency and stability under varying loads.' },
      { id: 2, title: 'Extreme Reliability', desc: 'Manufactured with high-grade copper wires and durable components.' },
      { id: 3, title: 'Flexible Cooling', desc: 'Supports natural, forced air, or oil cooling for demanding environments.' },
      { id: 4, title: 'Energy Optimization', desc: 'Designed for minimal losses across all types of power factor loads.' }
    ]
  },
  {
    id: 'ht-transformers',
    title: 'HT Transformers',
    image: h1,
    description: "Our High Tension (HT) Transformers are engineered for power transmission and distribution with minimal losses.",
    subTypes: [
      {
        title: "Type: Standard HT",
        image: h1,
        description: "Our Standard High Tension (HT) Transformers are engineered for optimal power transmission and distribution with minimal electrical losses."
      },
      {
        title: "Type: Advanced HT",
        image: ht2,
        description: "The Advanced HT Transformers offer robust build quality with enhanced dynamic short circuit withstand capacity, designed for severe and demanding environments."
      }
    ],
    features: [
      "Low loss core materials for high efficiency",
      "Excellent dynamic short circuit withstand capacity",
      "Compact design requiring less installation space",
      "Routine testing as per IS/IEC standards",
      "Low temperature rise for longer life"
    ],
    keyBenefits: [
      { id: 1, title: 'High Efficiency', desc: 'Optimized core design ensures minimum power losses.' },
      { id: 2, title: 'Durable Construction', desc: 'Built to withstand severe electrical and thermal stresses.' },
      { id: 3, title: 'Low Maintenance', desc: 'Requires minimal upkeep over extended operational lifespans.' },
      { id: 4, title: 'Customizable', desc: 'Available in diverse specifications to suit project needs.' }
    ]
  },
  {
    id: 'control-panels',
    title: 'Control Panels',
    image: c1,
    description: "We operate an in-house fabrication shop continuously manufacturing bespoke Power Control Panels and Remote Control Panels. Utilizing premium switchgear from leading brands like L&T, ABB, and Schneider, we design precision control circuits tailored to meet all specific requirements of our esteemed clients.",
    subTypes: [
      {
        title: "Model: Standard Enclosure",
        image: c1,
        description: "We operate an in-house fabrication shop continuously manufacturing bespoke Power Control Panels and Remote Control Panels. Utilizing premium switchgear from leading brands like L&T, ABB, and Schneider, we design precision control circuits tailored to meet all specific requirements of our esteemed clients."
      },
      {
        title: "Model: Multi-Tier Panel",
        image: cp2,
        description: "We operate an in-house fabrication shop continuously manufacturing bespoke Power Control Panels and Remote Control Panels. Utilizing premium switchgear from leading brands like L&T, ABB, and Schneider, we design precision control circuits tailored to meet all specific requirements of our esteemed clients."
      },
      {
        title: "Model: High-Density Control",
        image: cp3,
        description: "We operate an in-house fabrication shop continuously manufacturing bespoke Power Control Panels and Remote Control Panels. Utilizing premium switchgear from leading brands like L&T, ABB, and Schneider, we design precision control circuits tailored to meet all specific requirements of our esteemed clients."
      }
    ],
    features: [
      "Control Panels for Feeder machines and HV Testers",
      "MCC, PCC, and APFC (Automatic Power-Factor Correction) Panels",
      "Custom Panels with Mimic Design",
      "Test Benches of all types",
      "Enclosures for all classes of Transformers"
    ],
    keyBenefits: [
      { id: 1, title: 'Premium Quality', desc: 'Built using top-grade switchgear from trusted industry leaders.' },
      { id: 2, title: 'Fully Custom', desc: 'Circuits and enclosures designed specifically for your unique operational requirements.' },
      { id: 3, title: 'Versatile Range', desc: 'Extensive portfolio covering everything from test benches to MCC/PCC panels.' },
      { id: 4, title: 'Enhanced Safety', desc: 'Strict compliance with safety standards and robust fabrication.' }
    ]
  },
  {
    id: 'electroplating-rectifiers',
    title: 'Electroplating Rectifiers',
    image: e1,
    description: `Our Electroplating Rectifiers deliver highly efficient AC to DC conversion, ideal for anodizing, hydrogenation, and various electro-chemical processes. Designed to be compact, sturdy, and energy-saving with low maintenance, they feature clear analog Ampere and Volt indicators. We offer tailor-made capacities ranging from 25A to 25,000A (with specific models from 12V/100A to 12V/10,000A & 100V/50A to 250V/200A) to perfectly match your space and power needs.`,
    subTypes: [
      {
        title: "Type: Standard Model",
        image: e1,
        description: `Our Standard Electroplating Rectifiers deliver highly efficient AC to DC conversion, ideal for anodizing, hydrogenation, and various electro-chemical processes. Designed to be compact, sturdy, and energy-saving with low maintenance.`
      },
      {
        title: "Type: Custom Capacity Model",
        image: er2,
        description: `We offer tailor-made capacities for our High-Power Rectifiers ranging from 25A to 25,000A (with specific models from 12V/100A to 12V/10,000A & 100V/50A to 250V/200A) to perfectly match your space and heavy industrial power needs, featuring clear analog Ampere and Volt indicators.`
      }
    ],
    features: [
      "Stepless DC voltage and current control",
      "Ripple-free output for superior plating finishes",
      "Copper/Aluminum wound highly efficient transformers",
      "Heavy-duty diode/thyristor configuration",
      "Oil-cooled and Air-cooled variants available"
    ],
    keyBenefits: [
      { id: 1, title: 'Precision Output', desc: 'Delivers stable DC output for uniform material deposition.' },
      { id: 2, title: 'High Uptime', desc: 'Engineered to run continuously at full capacity 24/7.' },
      { id: 3, title: 'Energy Optimized', desc: 'Minimizes AC to DC conversion losses.' },
      { id: 4, title: 'Rugged Design', desc: 'Thrives in acidic and corrosive ambient environments.' }
    ]
  },
  {
    id: 'battery-charger',
    title: 'Automatic Battery Charger',
    image: abc,
    description: "Industrial-grade Battery Chargers providing stable and regulated charging for substations, power plants, and telecom networks.",
    features: [
      "Float and Boost charging modes",
      "Automatic battery health monitoring",
      "Constant Voltage / Constant Current characteristics",
      "Robust surge protection on input/output",
      "Alarms for under/over voltages and earth faults"
    ],
    keyBenefits: [
      { id: 1, title: 'Extended Battery Life', desc: 'Intelligent charging profiles prevent overcharging.' },
      { id: 2, title: 'Reliable Backup', desc: 'Ensures critical systems are always powered up.' },
      { id: 3, title: 'Versatile', desc: 'Compatible with Lead-acid, Ni-Cd, and Lithium battery banks.' },
      { id: 4, title: 'Zero Interference', desc: 'Low noise and ripple design.' }
    ]
  },
  {
    id: 'step-down-transformer',
    title: 'Step Down Transformer',
    image: sdt,
    description: "Step Down Transformers are primarily used to reduce high voltage levels to a safer and more usable level required by electrical equipment. They are widely used in industries to safely power imported machines with differing voltage standards, ensuring stable conversion, enhanced equipment safety, and efficient power distribution.",
    features: [
      "Phase: 3 Phase (Frequency: 50 Hz)",
      "Power Rating: 200 kVA",
      "Insulation Class: H",
      "Primary Voltage: 440V, Secondary Voltage: 220V",
      "Application: Ideal for Indoor Use"
    ],
    keyBenefits: [
      { id: 1, title: 'Stable Conversion', desc: 'Ensures reliable voltage reduction for sensitive machinery.' },
      { id: 2, title: 'Improved Safety', desc: 'Reduces high voltage levels to a safer, usable indoor standard.' },
      { id: 3, title: 'International Compatibility', desc: 'Safely powers imported machines with different voltage requirements.' },
      { id: 4, title: 'Efficient Distribution', desc: 'Provides efficient power distribution for industrial and commercial uses.' }
    ]
  },
  {
    id: 'online-ups',
    title: 'On Line UPS',
    image: olu,
    description: "Double-conversion Online UPS systems delivering pure sine wave output and uninterrupted power to your most mission-critical systems.",
    features: [
      "True double-conversion technology",
      "Zero transfer time to battery power",
      "Active power factor correction (APFC)",
      "Wide input voltage tolerance window",
      "Intelligent battery management system (IBMS)"
    ],
    keyBenefits: [
      { id: 1, title: 'Total Protection', desc: 'Isolates connected loads from all power anomalies.' },
      { id: 2, title: 'Seamless Power', desc: 'Absolute zero interruption during grid failures.' },
      { id: 3, title: 'Clean Energy', desc: 'Filters out noise, spikes, and frequency variations.' },
      { id: 4, title: 'High Overload Capacity', desc: 'Handles sudden inrush currents effortlessly.' }
    ]
  },
  {
    id: 'isolation-3-phase-transformers',
    title: 'Isolation 3 Phase Transformers',
    image: ipt,
    description: "High-grade 3 Phase Isolation Transformers designed to decouple susceptible loads from electrical noise and voltage spikes generated on the mains.",
    features: [
      "Galvanic isolation between primary and secondary",
      "Eliminates common mode and normal mode noise",
      "Faraday shield for superior interference attenuation",
      "High dielectric strength for safety",
      "Vibration-free and silent operation"
    ],
    keyBenefits: [
      { id: 1, title: 'Noise Suppression', desc: 'Filters out electrical noise protecting sensitive electronics.' },
      { id: 2, title: 'Enhanced Safety', desc: 'Prevents electric shocks by isolating the load from earth ground.' },
      { id: 3, title: 'Equipment Longevity', desc: 'Shields medical, CNC, and IT equipment from transients.' },
      { id: 4, title: 'Clean Power Ground', desc: 'Establishes a new, clean neutral-ground bond.' }
    ]
  },
  {
    id: 'transformer-oil',
    title: 'Transformer Oil',
    image: oil,
    description: "Transformer Oil is a high-performance insulating oil designed for use in electrical transformers, switchgear, and other high-voltage equipment. It provides excellent electrical insulation and efficient heat dissipation, ensuring reliable operation and extended equipment life.",
    features: [
      "High dielectric strength for better insulation",
      "Excellent thermal conductivity (heat cooling capability)",
      "Low viscosity for smooth circulation",
      "Oxidation resistant for longer life",
      "Moisture resistant and contamination free"
    ],
    keyBenefits: [
      { id: 1, title: 'Efficient Cooling', desc: 'Helps in maintaining optimal temperature inside transformers.' },
      { id: 2, title: 'Electrical Insulation', desc: 'Prevents short circuits and electrical failures.' },
      { id: 3, title: 'Long Equipment Life', desc: 'Reduces wear and tear, increasing transformer lifespan.' },
      { id: 4, title: 'Reliable Performance', desc: 'Ensures stable and safe transformer operation.' }
    ]
  }
];
