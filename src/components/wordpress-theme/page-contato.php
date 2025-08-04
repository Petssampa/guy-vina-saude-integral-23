
<?php get_header(); ?>

<section class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h1 class="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
                Entre em Contato
            </h1>
            <p class="text-lg text-gray-600">
                Estamos aqui para ajudar você em sua jornada de bem-estar
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <!-- Formulário de Contato -->
            <div>
                <h3 class="text-2xl font-bold text-deep-blue mb-6">Envie uma Mensagem</h3>
                <form class="space-y-6">
                    <div>
                        <label for="nome" class="block text-gray-700 font-semibold mb-2">Nome</label>
                        <input type="text" id="nome" name="nome" class="w-full px-4 py-3 border border-gray-300 rounded focus:border-deep-blue focus:outline-none">
                    </div>
                    
                    <div>
                        <label for="email" class="block text-gray-700 font-semibold mb-2">E-mail</label>
                        <input type="email" id="email" name="email" class="w-full px-4 py-3 border border-gray-300 rounded focus:border-deep-blue focus:outline-none">
                    </div>
                    
                    <div>
                        <label for="telefone" class="block text-gray-700 font-semibold mb-2">Telefone</label>
                        <input type="tel" id="telefone" name="telefone" class="w-full px-4 py-3 border border-gray-300 rounded focus:border-deep-blue focus:outline-none">
                    </div>
                    
                    <div>
                        <label for="mensagem" class="block text-gray-700 font-semibold mb-2">Mensagem</label>
                        <textarea id="mensagem" name="mensagem" rows="5" class="w-full px-4 py-3 border border-gray-300 rounded focus:border-deep-blue focus:outline-none"></textarea>
                    </div>
                    
                    <button type="submit" class="w-full bg-deep-blue hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded transition-colors">
                        Enviar Mensagem
                    </button>
                </form>
            </div>

            <!-- Informações de Contato -->
            <div>
                <h3 class="text-2xl font-bold text-deep-blue mb-6">Informações de Contato</h3>
                
                <div class="space-y-6">
                    <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 bg-bronze rounded-full flex items-center justify-center text-white">
                            📞
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900">Telefone</h4>
                            <p class="text-gray-600">+351 XXX XXX XXX</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 bg-bronze rounded-full flex items-center justify-center text-white">
                            ✉️
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900">E-mail</h4>
                            <p class="text-gray-600">contato@guyvina.com</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 bg-bronze rounded-full flex items-center justify-center text-white">
                            📍
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900">Localização</h4>
                            <p class="text-gray-600">Atendimento em Lisboa e online</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 bg-bronze rounded-full flex items-center justify-center text-white">
                            🕒
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900">Horário de Atendimento</h4>
                            <p class="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                            <p class="text-gray-600">Sábado: 9h às 14h</p>
                        </div>
                    </div>
                </div>

                <div class="mt-8">
                    <a href="#" onclick="abrirWhatsApp()" class="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded transition-colors">
                        Contato via WhatsApp
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
