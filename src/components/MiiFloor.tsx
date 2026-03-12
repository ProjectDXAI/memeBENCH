"use client";

export default function MiiFloor() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(45deg, #151515 25%, transparent 25%),
          linear-gradient(-45deg, #151515 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #151515 75%),
          linear-gradient(-45deg, transparent 75%, #151515 75%)
        `,
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0',
        backgroundColor: '#111111',
      }}
    />
  );
}
