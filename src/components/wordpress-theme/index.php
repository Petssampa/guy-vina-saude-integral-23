<?php get_header(); ?>

<!-- Hero Section -->
<section class="relative h-screen bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2126&auto=format&fit=crop');"></div>
    <div class="hero-overlay absolute inset-0"></div>
    
    <div class="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div class="mb-8">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&auto=format&fit=crop&crop=face" alt="Geisler Viana" class="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-bronze">
        </div>
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Equilíbrio e saúde através da Medicina Tradicional Chinesa
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-200">
            Transforme sua vida com Qi Gong, Acupuntura e terapias integrativas.
        </p>
        <a href="<?php echo home_url('/contato'); ?>" class="inline-block bg-bronze text-white hover:bg-amber-700 font-semibold text-lg px-8 py-4 rounded transition-colors">
            Agende sua consulta
        </a>
    </div>
</section>

<!-- Sobre Section -->
<section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-deep-blue mb-8">
                Sobre Geisler Viana
            </h2>
            <p class="text-lg text-gray-700 mb-8 leading-relaxed">
                Sou Geisler Viana, especialista em Medicina Tradicional Chinesa com foco em bem-estar integral. 
                Ajudo pacientes a encontrarem harmonia física e emocional através de terapias milenares.
            </p>
            <a href="<?php echo home_url('/sobre'); ?>" class="inline-block bg-bronze hover:bg-white hover:text-bronze border-2 border-bronze text-white font-semibold px-8 py-3 rounded transition-colors">
                Saiba mais
            </a>
        </div>
    </div>
</section>

<!-- Projetos Section -->
<section class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
                Principais Serviços
            </h2>
            <p class="text-lg text-gray-600">
                Abordagens integrativas da Medicina Tradicional Chinesa para seu bem-estar
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <!-- Acupuntura -->
            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="h-48 bg-bronze rounded mb-4"></div>
                <h3 class="text-xl font-bold text-deep-blue mb-3">Acupuntura</h3>
                <p class="text-gray-600">
                    Técnica milenar para equilibrar a energia vital e tratar diversos desequilíbrios.
                </p>
            </div>

            <!-- Fitoterapia -->
            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="h-48 bg-bronze rounded mb-4"></div>
                <h3 class="text-xl font-bold text-deep-blue mb-3">Fitoterapia</h3>
                <p class="text-gray-600">
                    Uso terapêutico de plantas medicinais para promover saúde e bem-estar.
                </p>
            </div>

            <!-- Tuina -->
            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="h-48 bg-bronze rounded mb-4"></div>
                <h3 class="text-xl font-bold text-deep-blue mb-3">Tuina</h3>
                <p class="text-gray-600">
                    Massagem terapêutica chinesa para relaxamento e cura natural.
                </p>
            </div>

            <!-- Diagnóstico Energético -->
            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="h-48 bg-bronze rounded mb-4"></div>
                <h3 class="text-xl font-bold text-deep-blue mb-3">Diagnóstico Energético</h3>
                <p class="text-gray-600">
                    Avaliação completa do estado energético para tratamento personalizado.
                </p>
            </div>
        </div>

        <div class="text-center">
            <a href="<?php echo home_url('/projetos'); ?>" class="inline-block bg-deep-blue hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded transition-colors">
                Conheça meus projetos
            </a>
        </div>
    </div>
</section>

<!-- Blog Section -->
<section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
                Blog
            </h2>
            <p class="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Artigos e dicas sobre Medicina Tradicional Chinesa, bem-estar e qualidade de vida.
            </p>
            
            <div class="text-center">
                <a href="<?php echo home_url('/blog'); ?>" class="inline-block bg-bronze hover:bg-white hover:text-bronze border-2 border-bronze text-white font-semibold px-8 py-3 rounded transition-colors">
                    Saiba mais
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Contato Section -->
<section class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
                Entre em Contato
            </h2>
            <p class="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Se surgir alguma dúvida sobre nossos serviços ou orçamentos, estamos aqui para ajudar. 
                Entre em contato por WhatsApp.
            </p>
            
            <div class="text-center">
                <a href="#" onclick="abrirWhatsApp()" class="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded transition-colors">
                    WhatsApp
                </a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
