// Mock inventory database — replace with real DB call in production
export const INVENTORY = [
  { pn: "STM32F407VGT6", mfr: "STMicroelectronics", desc: "ARM Cortex-M4 MCU, 168MHz, 1MB Flash, LQFP-100", stock: 1240, leadtime: "Stock", price: "$8.42", status: "in-stock" },
  { pn: "STM32F103C8T6", mfr: "STMicroelectronics", desc: "ARM Cortex-M3 MCU, 72MHz, 64KB Flash, LQFP-48", stock: 8650, leadtime: "Stock", price: "$2.10", status: "in-stock" },
  { pn: "SN74LVC1G14DBVR", mfr: "Texas Instruments", desc: "Single Schmitt-Trigger Inverter, SOT-23-5", stock: 22400, leadtime: "Stock", price: "$0.18", status: "in-stock" },
  { pn: "SN74HC595N", mfr: "Texas Instruments", desc: "8-Bit Shift Register w/ Latch, DIP-16", stock: 3100, leadtime: "Stock", price: "$0.62", status: "in-stock" },
  { pn: "ATMEGA328P-PU", mfr: "Microchip", desc: "8-Bit AVR MCU, 32KB Flash, DIP-28", stock: 940, leadtime: "Stock", price: "$2.85", status: "in-stock" },
  { pn: "LM358N", mfr: "ON Semiconductor", desc: "Dual Operational Amplifier, DIP-8", stock: 16500, leadtime: "Stock", price: "$0.22", status: "in-stock" },
  { pn: "NE555P", mfr: "Texas Instruments", desc: "Precision Timer, DIP-8", stock: 9320, leadtime: "Stock", price: "$0.31", status: "in-stock" },
  { pn: "TPS54360DDAR", mfr: "Texas Instruments", desc: "60-V, 3.5-A Buck Converter, SO-PowerPad-8", stock: 280, leadtime: "Stock", price: "$3.95", status: "low" },
  { pn: "ESP32-WROOM-32E", mfr: "Espressif", desc: "Wi-Fi + BT Module, 4MB Flash", stock: 5200, leadtime: "Stock", price: "$3.40", status: "in-stock" },
  { pn: "MAX232CPE", mfr: "Analog Devices", desc: "Dual RS-232 Transceiver, DIP-16", stock: 0, leadtime: "EOL — Sourcing", price: "RFQ", status: "eol" },
  { pn: "AD9850BRSZ", mfr: "Analog Devices", desc: "125MHz DDS Synthesizer, SSOP-28", stock: 76, leadtime: "Stock", price: "$24.50", status: "low" },
  { pn: "LT1086CT-3.3", mfr: "Analog Devices", desc: "1.5A Positive LDO, TO-220-3", stock: 0, leadtime: "Obsolete — Vintage", price: "RFQ", status: "eol" },
  { pn: "IRFZ44N", mfr: "Infineon", desc: "55V N-Channel MOSFET, TO-220AB", stock: 4200, leadtime: "Stock", price: "$0.55", status: "in-stock" },
  { pn: "BC547B", mfr: "ON Semiconductor", desc: "45V NPN BJT, TO-92", stock: 32000, leadtime: "Stock", price: "$0.05", status: "in-stock" },
  { pn: "FT232RL", mfr: "FTDI", desc: "USB-UART Bridge, SSOP-28", stock: 1860, leadtime: "Stock", price: "$3.20", status: "in-stock" },
  { pn: "PIC16F877A-I/P", mfr: "Microchip", desc: "8-Bit MCU, 14KB Flash, PDIP-40", stock: 540, leadtime: "Stock", price: "$4.10", status: "low" },
];

export function searchInventory(q) {
  const term = (q || "").trim().toLowerCase();
  if (!term) return [];
  return INVENTORY.filter(p =>
    p.pn.toLowerCase().includes(term) ||
    p.mfr.toLowerCase().includes(term) ||
    p.desc.toLowerCase().includes(term)
  );
}
