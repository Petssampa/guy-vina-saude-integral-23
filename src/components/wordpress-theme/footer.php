
</main>

<footer class="bg-deep-blue text-white">
    <div class="container mx-auto px-4 py-12">
        <!-- Top Section - 3 Columns -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <!-- Identidade -->
            <div>
                <h3 class="text-xl font-bold mb-4">Geisler Viana</h3>
                <p class="text-gray-200">
                    Saúde integral através da Medicina Tradicional Chinesa.
                </p>
            </div>

            <!-- Links Rápidos -->
            <div>
                <h4 class="text-lg font-semibold mb-4">Links Rápidos</h4>
                <ul class="space-y-2">
                    <li>
                        <a href="<?php echo home_url(); ?>" class="text-gray-200 hover:text-bronze transition-colors">Home</a>
                    </li>
                    <li>
                        <a href="<?php echo home_url('/sobre'); ?>" class="text-gray-200 hover:text-bronze transition-colors">Sobre</a>
                    </li>
                    <li>
                        <a href="<?php echo home_url('/projetos'); ?>" class="text-gray-200 hover:text-bronze transition-colors">Projetos</a>
                    </li>
                    <li>
                        <a href="<?php echo home_url('/blog'); ?>" class="text-gray-200 hover:text-bronze transition-colors">Blog</a>
                    </li>
                    <li>
                        <a href="<?php echo home_url('/contato'); ?>" class="text-gray-200 hover:text-bronze transition-colors">Contato</a>
                    </li>
                </ul>
            </div>

            <!-- Contatos -->
            <div>
                <h4 class="text-lg font-semibold mb-4">Contatos</h4>
                <div class="space-y-2 text-gray-200">
                    <p>📞 +351 XXX XXX XXX</p>
                    <p>✉️ contato@guyvina.com</p>
                    <p>📍 Atendimento em Lisboa e online</p>
                </div>
            </div>
        </div>

        <!-- Bottom Section -->
        <div class="border-t border-gray-600 pt-8 text-center">
            <p class="text-gray-200">
                © <?php echo date('Y'); ?> Geisler Viana. Todos os direitos reservados.
            </p>
        </div>
    </div>
</footer>

<!-- WhatsApp Button -->
<a href="#" onclick="abrirWhatsApp()" class="whatsapp-float" aria-label="Entrar em contato via WhatsApp">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
    </svg>
</a>

<?php wp_footer(); ?>
</body>
</html>
