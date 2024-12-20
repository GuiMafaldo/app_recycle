import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

const AboutEnterpriseView: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Recycle.me</Text>
          <Text style={styles.subtitle}>Transformando resíduos em recursos desde 2024</Text>
          <Image style={{width: 360, height: 200, left: 30, borderRadius: 12}} source={(require('../../assets/image1.png'))} />
        </View>
        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sobre Nós</Text>
            <Text style={styles.text}>
              A Recycle.me é uma empresa líder em soluções de reciclagem e gestão de resíduos. 
              Fundada em 2024, nossa missão é promover práticas sustentáveis e contribuir para um futuro mais limpo e verde.
            </Text>
            <Image source={(require('../../assets/image2.png'))} style={{width: 360, height: 200, left: 30, borderRadius: 12}} />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Nossa Missão</Text>
            <Text style={styles.text}>
              Transformar o desafio dos resíduos em oportunidades de inovação e sustentabilidade, 
              educando comunidades e fornecendo soluções eficientes de reciclagem.
            </Text>
            <Image source={(require('../../assets/image3.png'))} style={{width: 360, height: 200, left: 30, borderRadius: 12}} />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Nossa Visão</Text>
            <Text style={styles.text}>
              Ser reconhecida globalmente como líder em tecnologias de reciclagem e 
              catalisador de uma economia circular onde o desperdício é minimizado e os recursos são otimizados.
            </Text>
            <Image  source={(require('../../assets/test1.jpg'))} style={{width: 360, height: 200, left: 30, borderRadius: 12}} />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contato</Text>
            <Text style={styles.text}>
              Entre em contato conosco para saber mais sobre nossos serviços e como podemos ajudar sua comunidade ou empresa a alcançar seus objetivos de sustentabilidade.
            </Text>
            <Image source={(require('../../assets/test2.jpg'))} style={{width: 360, height: 200, left: 30, borderRadius:12}}  />
            <Text style={{ left: 120, top: 30, fontSize: 18, paddingBottom: 20}}>
              Email: info@ecorecycle.com{'\n'}
              Telefone: (11) xxxxx-xxx
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    top: 60
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    left: 150
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginTop: 4,
    left: 50, 
    marginBottom: 16
  },
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
    left: 160
  },
  text: {
    fontSize: 16,
    color: '#34495e',
    lineHeight: 24,
    marginBottom: 16,
    left: 8,
    padding: 12
  },
  list: {
    marginTop: 8,
  },
  listItem: {
    fontSize: 16,
    color: '#34495e',
    lineHeight: 24,
    marginBottom: 4,
  },
});

export default AboutEnterpriseView;
