import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const Perfil = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>C</Text>
          </View>
          <Text style={styles.userName}>Clarissa Morita</Text>
          <Text style={styles.userRole}>Universitária e Estagiária TI</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>32</Text>
          <Text style={styles.statLabel}>Projetos</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>881</Text>
          <Text style={styles.statLabel}>Seguidores</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>367</Text>
          <Text style={styles.statLabel}>Commits</Text>
        </View>
      </View>

      <View style={styles.menuItems}>
        <View style={styles.menuItem}>
          <View style={styles.menuLeftGroup}>
            <Text style={styles.icon}>🔔</Text>
            <Text style={styles.menuText}>Avisos</Text>
          </View>
          <Text style={styles.chevron}>{'>'}</Text>
        </View>

        <View style={styles.menuItem}>
          <View style={styles.menuLeftGroup}>
            <Text style={styles.icon}>👤</Text>
            <Text style={styles.menuText}>Perfil</Text>
          </View>
          <Text style={styles.chevron}>{'>'}</Text>
        </View>

        <View style={styles.menuItem}>
          <View style={styles.menuLeftGroup}>
            <Text style={styles.icon}>🔒</Text>
            <Text style={styles.menuText}>Configurar</Text>
          </View>
          <Text style={styles.chevron}>{'>'}</Text>
        </View>

        <View style={styles.menuItem}>
          <View style={styles.menuLeftGroup}>
            <Text style={styles.icon}>❓</Text>
            <Text style={styles.menuText}>Ajuda</Text>
          </View>
          <Text style={styles.chevron}>{'>'}</Text>
        </View>

        <View style={styles.menuItem}>
          <View style={styles.menuLeftGroup}>
            <Text style={styles.icon}>🚪</Text>
            <Text style={styles.menuText}>Sair</Text>
          </View>
          <Text style={styles.chevron}>{'>'}</Text>
        </View>
      </View>
    </SafeAreaView>
    
  )
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f7fb',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#0f766e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 34,
    fontWeight: '700',
    color: '#ffffff',
  },
  userName: {
    marginTop: 8,
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  userRole: {
    fontSize: 14,
    color: '#4b5563',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 24,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  statLabel: {
    marginTop: 4,
    fontSize: 12,
    color: '#6b7280',
  },
  menuItems: {
    marginHorizontal: 24,
    marginBottom: 24,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    overflow: 'hidden',
  },
  separator: {
    width: 1,
    height: '60%',
    backgroundColor: '#E0E0E0',
    alignSelf: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuLeftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  chevron: {
    fontSize: 18,
    color: '#CCC',
  }
});

export default Perfil;
