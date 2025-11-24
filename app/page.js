export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "2rem",
      fontFamily: "system-ui, sans-serif"
    }}>
      <h1 style={{ fontSize: "5rem", fontWeight: "900" }}>AUREVO ACADEMY</h1>
      <p style={{ fontSize: "2rem", margin: "2rem 0" }}>
        Gana $100 reales en blockchain → Certificado NFT automático
      </p>
      <button style={{
        background: "#00ff88",
        color: "black",
        padding: "1.5rem 4rem",
        borderRadius: "50px",
        fontSize: "1.8rem",
        fontWeight: "bold",
        border: "none",
        cursor: "pointer"
      }}>
        PRÓXIMAMENTE: Conectar Wallet
      </button>
      <p style={{ marginTop: "3rem", fontSize: "1.3rem" }}>
        Cohort Diciembre 2025 · 100% gratuito · Certificado en Solana
      </p>
    </div>
  );
}
