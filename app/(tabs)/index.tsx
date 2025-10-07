import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../../assets/images/minha-foto.jpg')}
          style={styles.photo}
        />
        <Text style={styles.name}>David Cândido</Text>
        <Text style={styles.bio}>
          Sou estudante apaixonado por tecnologia e desenvolvimento de software.
          Tenho interesse em criar aplicativos modernos com React Native e aprender
          continuamente sobre novas ferramentas e linguagens.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f7fb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 6,
  },
  photo: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 18,
  },
  name: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 12,
    color: '#0b73ff',
    textAlign: 'center',
  },
  bio: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    color: '#333',
  },
});
