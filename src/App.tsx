import styles from "./app.module.less";
import { ErrorTips } from "./components/error-tip";
import Chat from "./modules/chat";
import { ConfigProvider } from "./configProvider";
function App() {
  return (
    <ConfigProvider>
      <div className={styles.app}>
        <Chat />
        <ErrorTips />
      </div>
    </ConfigProvider>
  );
}

export default App;
