import React from "react";

const InstagramFeed = () => {
  return (
    <section className="py-24 px-4 bg-background" id="instagram">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">Siga-nos no Instagram</h2>
          <p className="text-primary/80 max-w-2xl mx-auto mb-12">
            <strong>@clinica.equinimite</strong> <p></p>Acompanhe nossas postagens e fique por dentro de conteúdos sobre saúde mental e bem-estar!
          </p>
        </div>
        
        {/* Widget do Instagram - Elfsight */}
        <div className="elfsight-app-3a25308b-22d3-4849-a621-410bd2a09f46" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

const InstagramPage = () => {
  return (
    <>
      <InstagramFeed />
    </>
  );
};

export default InstagramPage;
