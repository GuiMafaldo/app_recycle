import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { RecycleType } from '../../types/types';
import MyCarousel from '../../utils/Carousel';
import RecycleCard from '../../components/RecycleCard';
import AboutEnterpriseView from '../../components/About';


export const recycleTypes: RecycleType[] = [
  {
    id: '1',
    type: 'Papel',
    icon: 'newspaper-outline',
    color: '#3498db',
    shortDescription: 'Material reciclável feito de fibras de celulose.',
    longDescription: 'O papel é um material versátil, amplamente utilizado em nosso dia a dia. Feito principalmente de fibras de celulose extraídas de árvores, o papel pode ser reciclado várias vezes, embora as fibras se degradem a cada ciclo.',
    importance: 'A reciclagem de papel é crucial para a conservação de recursos naturais, redução do desmatamento e diminuição da quantidade de resíduos em aterros sanitários.',
    whyRecycle: 'Reciclar papel economiza água, energia e reduz a emissão de gases de efeito estufa associados à produção de papel novo. Além disso, diminui a necessidade de corte de árvores para produção de celulose virgem.',
    environmentalImpact: 'A produção de papel é responsável por cerca de 35% do desmatamento global. A reciclagem ajuda a mitigar esse impacto, preservando florestas que são essenciais para o equilíbrio climático e biodiversidade.',
    recyclingProcess: 'O processo de reciclagem do papel envolve a coleta, triagem, trituração, remoção de impurezas, branqueamento (se necessário) e formação de nova pasta de papel, que é então transformada em novos produtos.',
    tips: '1. Separe papéis limpos e secos.\n2. Remova grampos, clipes e fitas adesivas.\n3. Não recicle papéis engordurados ou sujos de alimentos.\n4. Prefira produtos feitos de papel reciclado.'
  },
  {
    id: '2',
    type: 'Plástico',
    icon: 'water-outline',
    color: '#e74c3c',
    shortDescription: 'Material versátil, mas prejudicial quando descartado incorretamente.',
    longDescription: 'O plástico é um material sintético derivado principalmente do petróleo. Sua versatilidade e durabilidade o tornaram onipresente em nossa sociedade, mas essas mesmas características o tornam um grande problema ambiental quando descartado de forma inadequada.',
    importance: 'A reciclagem de plástico é essencial para reduzir a poluição dos oceanos, diminuir a dependência de combustíveis fósseis e minimizar os impactos ambientais da produção de plástico virgem.',
    whyRecycle: 'Reciclar plástico economiza energia, reduz a emissão de gases de efeito estufa e diminui a quantidade de resíduos em aterros e oceanos. Além disso, a reciclagem cria uma economia circular para o plástico, reduzindo a necessidade de produção de novo material.',
    environmentalImpact: 'O plástico pode levar centenas de anos para se decompor na natureza. Durante esse processo, ele se fragmenta em microplásticos que contaminam solo, água e entram na cadeia alimentar, afetando a vida selvagem e potencialmente a saúde humana.',
    recyclingProcess: 'A reciclagem do plástico envolve coleta, triagem por tipo de plástico, lavagem, trituração, fusão e transformação em pellets, que são então usados para produzir novos produtos plásticos.',
    tips: '1. Verifique o símbolo de reciclagem para identificar o tipo de plástico.\n2. Lave e seque os recipientes antes de reciclar.\n3. Reduza o uso de plásticos descartáveis.\n4. Opte por produtos feitos de plástico reciclado quando possível.'
  },
  {
    id: '3',
    type: 'Vidro',
    icon: 'wine-outline',
    color: '#2ecc71',
    shortDescription: '100% reciclável e pode ser reciclado infinitamente sem perder qualidade.',
    longDescription: 'O vidro é um material inorgânico, homogêneo e inerte, produzido a partir da fusão de areia, calcário e carbonato de sódio. É um dos materiais mais ecológicos, pois pode ser reciclado infinitamente sem perder suas propriedades.',
    importance: 'A reciclagem de vidro é fundamental para reduzir o consumo de matérias-primas, economizar energia e diminuir as emissões de CO2 associadas à produção de vidro novo.',
    whyRecycle: 'Reciclar vidro economiza até 30% de energia em comparação com a produção de vidro novo. Além disso, reduz a extração de matérias-primas e diminui a quantidade de resíduos em aterros sanitários.',
    environmentalImpact: 'O vidro não se decompõe na natureza, permanecendo nos ecossistemas por tempo indeterminado. Sua reciclagem evita que esse material ocupe espaço em aterros e reduz os riscos de acidentes com animais.',
    recyclingProcess: 'O processo de reciclagem do vidro inclui coleta, triagem por cor, trituração, limpeza, fusão e moldagem em novos produtos. O vidro reciclado pode ser usado para produzir novos recipientes ou outros produtos, como materiais de construção.',
    tips: '1. Separe o vidro por cores (incolor, verde, âmbar).\n2. Remova tampas e rótulos.\n3. Lave os recipientes antes de reciclar.\n4. Não misture vidros de janelas ou espelhos com vidros de embalagens.'
  },
  {
    id: '4',
    type: 'Metal',
    icon: 'hardware-chip-outline',
    color: '#f39c12',
    shortDescription: 'Altamente reciclável, economiza energia e reduz a mineração.',
    longDescription: 'Os metais são materiais versáteis e duráveis, amplamente utilizados em diversos setores. Os mais comuns para reciclagem são o alumínio e o aço. Metais podem ser reciclados indefinidamente sem perder suas propriedades.',
    importance: 'A reciclagem de metais é crucial para conservar recursos naturais, reduzir o consumo de energia e minimizar os impactos ambientais da mineração e produção de metais novos.',
    whyRecycle: 'Reciclar metais economiza até 95% da energia necessária para produzir metal novo a partir de minérios. Além disso, reduz significativamente as emissões de gases de efeito estufa e a necessidade de extração de recursos naturais.',
    environmentalImpact: 'A mineração e produção de metais têm impactos ambientais significativos, incluindo desmatamento, erosão do solo e poluição da água. A reciclagem ajuda a mitigar esses impactos, preservando ecossistemas e reduzindo a pegada de carbono.',
    recyclingProcess: 'O processo de reciclagem de metais envolve coleta, separação magnética (para metais ferrosos), trituração, fusão e purificação. O metal reciclado é então moldado em novos produtos ou lingotes para posterior uso.',
    tips: '1. Separe metais ferrosos (atraídos por ímãs) de não ferrosos.\n2. Limpe os recipientes antes de reciclar.\n3. Amasse latas para economizar espaço.\n4. Não descarte eletrônicos no lixo comum; procure pontos de coleta específicos.',
    
  },
  {
    id: '5',
    type: 'Orgânico',
    icon: 'leaf-outline',
    color: '#8e44ad',
    shortDescription: 'Pode ser compostado para criar adubo natural.',
    longDescription: 'Resíduos orgânicos são materiais biodegradáveis de origem vegetal ou animal. Incluem restos de alimentos, folhas, galhos e outros materiais que podem ser decompostos naturalmente por microrganismos.',
    importance: 'A compostagem de resíduos orgânicos é essencial para reduzir o volume de lixo em aterros, diminuir a emissão de metano (um potente gás de efeito estufa) e produzir adubo natural para enriquecer o solo.',
    whyRecycle: 'Compostar resíduos orgânicos fecha o ciclo de nutrientes, devolvendo-os ao solo. Isso melhora a fertilidade do solo, reduz a necessidade de fertilizantes químicos e ajuda a combater a erosão.',
    environmentalImpact: 'Quando descartados em aterros, os resíduos orgânicos produzem metano durante sua decomposição anaeróbica. A compostagem evita essa emissão e cria um produto valioso para jardinagem e agricultura.',
    recyclingProcess: 'A compostagem envolve a decomposição controlada de materiais orgânicos por microrganismos em condições aeróbicas. O processo pode ser feito em pequena escala em residências ou em grande escala em instalações municipais.',
    tips: '1. Separe restos de frutas, verduras e alimentos não cozidos.\n2. Evite incluir carnes, laticínios e alimentos gordurosos na compostagem doméstica.\n3. Equilibre materiais "verdes" (ricos em nitrogênio) e "marrons" (ricos em carbono).\n4. Mantenha sua composteira úmida e aerada.',
  
  },
  {
    id: '6',
    type: 'Eletrônico',
    icon: 'phone-portrait-outline',
    color: '#34495e',
    shortDescription: 'Contém materiais valiosos e tóxicos, requer reciclagem especializada.',
    longDescription: 'O lixo eletrônico, ou e-lixo, inclui dispositivos eletrônicos descartados, como computadores, smartphones, televisores e eletrodomésticos. Esses itens contêm uma mistura complexa de materiais, incluindo metais preciosos, plásticos e componentes potencialmente tóxicos.',
    importance: 'A reciclagem de eletrônicos é crucial para recuperar materiais valiosos, prevenir a contaminação ambiental por substâncias tóxicas e reduzir a necessidade de mineração de novos recursos.',
    whyRecycle: 'Reciclar eletrônicos permite a recuperação de metais preciosos como ouro, prata e cobre. Também evita que substâncias perigosas como chumbo, mercúrio e cádmio contaminem o solo e a água.',
    environmentalImpact: 'O descarte inadequado de eletrônicos pode levar à lixiviação de substâncias tóxicas no solo e água subterrânea. A reciclagem adequada mitiga esses riscos e reduz a necessidade de mineração, que muitas vezes causa danos ambientais significativos.',
    recyclingProcess: 'A reciclagem de eletrônicos envolve desmontagem, separação de componentes, trituração e processos especializados para recuperar diferentes materiais. Alguns componentes podem ser reutilizados em novos dispositivos.',
    tips: '1. Nunca descarte eletrônicos no lixo comum.\n2. Procure pontos de coleta específicos para e-lixo.\n3. Apague dados pessoais antes de descartar dispositivos.\n4. Considere doar equipamentos funcionais para reutilização.',
  },
];

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<RecycleType | null>(null);

  const handleCardPress = (item: RecycleType) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.containerSafeArea}>
        <StatusBar style="auto"/>
        <MyCarousel />
        <View style={styles.contentText}>
          <Text style={styles.text}>Tipos de Recicláveis</Text>
        </View>
        <View style={styles.contentViewGrid} testID='content-cards'>
          <FlatList
            data={recycleTypes}
            renderItem={({ item }) => <RecycleCard item={item} onPress={handleCardPress} />}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styles.grid}
            scrollEnabled={false}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {selectedItem && (
                <>
                  <View style={[styles.modalHeader, { backgroundColor: selectedItem.color }]}>
                    <Ionicons name={selectedItem.icon} size={60} color="white" />
                    <Text style={styles.modalTitle}>{selectedItem.type}</Text>
                  </View>
                  <ScrollView style={styles.modalContent}>
                    <Text style={styles.modalDescriptionShort}>{selectedItem.shortDescription}</Text>
                    <Text style={styles.modalDescriptionLong}>{selectedItem.longDescription}</Text>
                    <View style={styles.modalList}>
                      <Text style={styles.modalListItem}>1 - {selectedItem.importance}</Text>
                      <Text style={styles.modalListItem}>2 - {selectedItem.whyRecycle}</Text>
                      <Text style={styles.modalListItem}>3 - {selectedItem.recyclingProcess}</Text>
                      <Text style={styles.modalListItem}>4 - {selectedItem.environmentalImpact}</Text>
                      <Text style={styles.modalListItem}>5 - Mais informações</Text>
                    </View>
                  </ScrollView>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.closeButtonText}>Fechar</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </Modal>
        <AboutEnterpriseView />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginTop: 100,
    paddingBottom: 80
  },
  contentText: {
    marginBottom: 20,
  },
  text: {
    fontSize: 28,
    color: '#2c3e50',
    fontWeight: 'bold',
  },
  contentViewGrid: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f0f0f0',
  },
  grid: {
    paddingHorizontal: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '90%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalHeader: {
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  modalContent: {
    padding: 20,
  },
  modalDescriptionShort: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: '800',
    marginLeft: 20
  },
  modalDescriptionLong: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalList: {
    marginTop: 10,
  },
  modalListItem: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#2c3e50',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

