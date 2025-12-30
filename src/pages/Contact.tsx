
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('https://formspree.io/f/xldqlkpg', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve. Obrigado!",
      });
      setFormData({ name: '', email: '', message: '' });
    } else {
      throw new Error('Erro ao enviar');
    }
  } catch (error) {
    toast({
      title: "Erro ao enviar mensagem",
      description: "Tente novamente mais tarde ou use o WhatsApp.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta.");
    const whatsappUrl = `https://wa.me/351XXXXXXXXX?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ 
            backgroundImage: `url('/lovable-uploads/8b6214f7-b303-4096-a44d-f78c5a68b3f1.png')`,
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Início</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Contato</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="max-w-4xl mx-auto text-center mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-200">
              Estamos aqui para ajudar você em sua jornada de bem-estar
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-deep-blue text-2xl">Envie sua Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário e entraremos em contato em breve
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-nos como podemos ajudar você..."
                      rows={6}
                      className="mt-1"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-deep-blue hover:bg-blue-800"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-deep-blue text-2xl">Informações de Contato</CardTitle>
                <CardDescription>
                  Outras formas de entrarmos em contato
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-deep-blue text-sm">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-blue">Telefone</h4>
                    <p className="text-gray-600">+55+11 95293-1497</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-deep-blue text-sm">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-blue">E-mail</h4>
                    <p className="text-gray-600">geislerviana@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-deep-blue text-sm">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-blue">Localização</h4>
                    <p className="text-gray-600">Atendimento em São Paulo</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-deep-blue text-sm">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-blue">Horário de Atendimento</h4>
                    <p className="text-gray-600">Segunda a Domingo: 9h às 18h</p>
                    <p className="text-gray-600">Qi Gong em Domicílio 50+</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                  >
                    Contato via WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
